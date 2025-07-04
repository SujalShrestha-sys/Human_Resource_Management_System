import express from 'express';
import {createEmployee,deleteEmployee,getEmployee,getEmployeeById,updateEmployee} from "../controllers/employeeController.js"

const router = express.Router();

router.post("/", createEmployee);

router.get('/',getEmployee);

router.get("/:id",getEmployeeById)

router.delete("/:id",deleteEmployee)

router.put("/:id",updateEmployee)

export default router;