import express from 'express';
import { createEmployee, deleteEmployee, getEmployee, getEmployeeById, updateEmployee } from "../controllers/employeeController.js"
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", authenticateToken, createEmployee);

router.get('/', getEmployee);

router.get("/:id", getEmployeeById)

router.delete("/:id", deleteEmployee)

router.put("/:id", updateEmployee)

export default router;