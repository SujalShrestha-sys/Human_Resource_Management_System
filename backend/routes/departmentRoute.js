import express from 'express'
import { createDepartment, updateDepartment, getDepartmentById, getDepartment, deleteDepartment } from '../controllers/departmentControllers.js'

const router=express.Router();

router.get('/',getDepartment);
router.get('/',getDepartmentById);
router.post("/",createDepartment);
router.put("/:id",updateDepartment);
router.delete("/:id",deleteDepartment);

export default router;