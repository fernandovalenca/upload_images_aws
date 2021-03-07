import { Document } from "mongoose";
import { Post } from "../../entities/Post";
import PostSchema from "../../models/PostSchema";
import { PostRepository } from "../PostRepository";

export class PostRepositoryImp implements PostRepository {
    async index(): Promise<[Post]> {
        const posts: [Post] = await PostSchema.find();

        return posts;
    };
    async save(data: Post): Promise<Post> {
        const { name, size, key, url } = data;
        
        try {
            const post = await PostSchema.create({ name, size, key, url });

            return post;
        } catch (error) {
            throw new Error(error.message);
        }
    };
    async delete(id: string): Promise<void> {
        const post: Document = await PostSchema.findById(id);
        
        if (!post) {
            throw new Error('Post not found.')
        }
        post.remove();
    };
};