import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from '../config/multer';
import { postService } from '../services';

const postsRouter = Router();

postsRouter.get('/posts', async (request, response) => {
    try {
        const posts = await postService.index();

        return response.json(posts)
    } catch (error) {
        return response.status(401).json({ message: error.message })
    }
});

postsRouter.post('/posts', multer(multerConfig).single('file'), async (request, response) => {
    const { originalname: name, size, key, url = '' } = request.file;

    try {
        const post = await postService.save({ name, size, key, url });
        return response.status(201).json(post);
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
});

postsRouter.delete('/posts/:id', async (request, response) => {
    const { id } = request.params;

    try {
        await postService.delete(id)
        return response.sendStatus(200);
    } catch (error) {
        return response.status(404).json({ message: error.message });
    }
});

export default postsRouter;