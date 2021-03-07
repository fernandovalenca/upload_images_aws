import { PostRepositoryImp } from "../repositories/PostRepositoryImp/PostRepositoryImp";
import { PostService } from "./PostService";

const postRepository = new PostRepositoryImp();
const postService = new PostService(postRepository);

export { postService };