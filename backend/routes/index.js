import express from "express";
import employeeRoutes from "./employeeRoutes.js";
import authRoutes from "./authRoutes.js";
import departmentRoutes from "./departmentRoute.js"
import leaveRoutes from "./leaveRoutes.js";
import payrollRoutes from "./payrollRoutes.js"
import performanceRoutes from "./performanceRoutes.js"

const router = express.Router();

//mount route modules

router.use("/employees", employeeRoutes);
router.use("/auth", authRoutes)
router.use("/department", departmentRoutes);
router.use("/leave",leaveRoutes);
router.use("/payroll", payrollRoutes);
router.use("/performance", performanceRoutes);

export default router;