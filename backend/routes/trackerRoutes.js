import express from 'express';
const router = express.Router();
import { 
  getTrackers, 
  createTracker,
  getTrackerById,
  updateTracker,
  deleteTracker,
} from '../controllers/trackerControllers.js';
import { protect } from '../middleware/authMiddleware.js'

router.route('/')
.get(getTrackers)
.post(protect, createTracker)

router.route('/:id')
  .get(protect, getTrackerById)
  .put(protect, updateTracker)
  .delete(protect, deleteTracker);




export default router;

