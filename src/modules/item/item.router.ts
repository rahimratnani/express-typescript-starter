import { Router } from 'express';
import {
  getMany,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from './item.controller.js';

const router = Router();

/* /api/items */
router.route('/').get(getMany).post(createOne);

/* /api/items/:id */
router.route('/:id').get(getOne).put(updateOne).delete(deleteOne);

export default router;
