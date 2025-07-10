import express from 'express';
import { createEmployee, deleteEmployee, getEmployee, getEmployeeById, updateEmployee } from "../controllers/employeeController.js"
import { checkRole } from '../middleware/authMiddleware.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", [authenticateToken, checkRole("admin", "manager")], createEmployee);

router.get('/',authenticateToken, getEmployee);

router.get("/:id", authenticateToken,getEmployeeById)

router.delete("/:id", [authenticateToken,checkRole("admin", "manager")], deleteEmployee)

router.put("/:id", [authenticateToken,checkRole("admin", "manager")], updateEmployee)

export default router;