import { Post } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";

export class PostService {
    constructor(private postRepository: PostRepository) { }

    async index(): Promise<[Post]> {
        return this.postRepository.index();
    }

    async save(data: Post): Promise<Post> {
        const post = await this.postRepository.save(data);
        
        return post;
    }
    async delete(id: string): Promise<void> {
        await this.postRepository.delete(id);
    }
}