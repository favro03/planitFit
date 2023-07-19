import express from 'express';
const router = express.Router();
import { 
  getPlanners, 
  createPlanner,
  getPlannerById,
  updatePlanner,
  deletePlanner,
} from '../controllers/plannerControllers.js';
import { protect } from '../middleware/authMiddleware.js'

router.route('/')
.get(getPlanners)
.post(protect, createPlanner)

router.route('/:id')
  .get(protect, getPlannerById)
  .put(protect, updatePlanner)
  .delete(protect, deletePlanner);




export default router;

