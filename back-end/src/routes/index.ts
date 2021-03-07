import { Router } from "express";

import postsRouter from "./posts.routes";

const routes = Router();

routes.post('/posts', postsRouter);
routes.get('/posts', postsRouter);
routes.delete('/posts/:id', postsRouter);

export default routes;