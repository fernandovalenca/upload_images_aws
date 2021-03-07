import { Post } from "../entities/Post";

export interface PostRepository {
    save(data: Post): Promise<Post>;
    index(): Promise<[Post]>;
    delete(id: string): Promise<void>;
}