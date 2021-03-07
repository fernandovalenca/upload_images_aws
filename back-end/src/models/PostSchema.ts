import mongoose, { Document } from "mongoose";
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import aws from 'aws-sdk';

const s3 = new aws.S3();

interface IPostSchema extends Document {
    name: string;
    size: number;
    key: string;
    url: string;
}

const PostSchema = new mongoose.Schema<IPostSchema>({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PostSchema.pre('save', function () {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    };
});

PostSchema.pre('remove', function () {
    if (process.env.STORAGE_TYPE === 's3') {
        return s3.deleteObject({
            Bucket: 'uploadimages',
            Key: this.key,
        }).promise();
    } else {
        return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key));
    }
})

export default mongoose.model<IPostSchema>('Posts', PostSchema);