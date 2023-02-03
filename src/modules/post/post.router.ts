import { Router } from 'express';
import { createOne, updateOne, deleteOne, getOne } from './post.controller.js';

const router = Router();

/* /api/posts */
router.route('/').post(createOne);

/* /api/posts/:id */
router.route('/:id').get(getOne).put(updateOne).delete(deleteOne);

export default router;
