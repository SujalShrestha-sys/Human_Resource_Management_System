import express from 'express';

import {
  createAttendance,
  getAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance
} from '../controllers/attendanceController.js';

const router = express.Router();

router.get("/", getAttendance)
router.post("/", createAttendance)
router.get('/:id', getAttendanceById)
router.put('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);

export default router;