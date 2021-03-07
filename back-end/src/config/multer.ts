import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';  

const storageTypes = {
    local: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (request, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err, '');
                file.key = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, file.key);
            });
        },
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadimages',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (request, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err, '');
                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, fileName);
            });
        },
    }),
};

export const multerConfig = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE = 'local' ? 'local' : 's3'],
    limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE_IN_BYTES),
    },
    fileFilter: (request: Request, file: Express.Multer.File, callback: Function) => {
        const allowedMimes = ["image/jpg", "image/jpeg", "image/png", "image/gif"]

        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error('Invalid file type.'));
        };
    },
};