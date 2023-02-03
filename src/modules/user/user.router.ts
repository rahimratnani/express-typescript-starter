import { Router } from 'express';
import {
  getMany,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  findDraftsByUser,
} from './user.controller.js';

const router = Router();

/* /api/users */
router.route('/').get(getMany).post(createOne);

/* /api/users/:id */
router.route('/:id').get(getOne).put(updateOne).delete(deleteOne);

/* /api/users/:id/drafts */
router.get('/:id/drafts', findDraftsByUser);

export default router;
