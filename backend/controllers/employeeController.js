import Employee from "../models/employee.js";
import bcrypt from "bcryptjs";

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const hashedPassword = await bcrypt.hash(employee.password, 10);
        employee.password = hashedPassword;
        const savedEmployee = await employee.save();
        res.status(201).json({
            success: true,
            message: "Employe created successfully",
            data: savedEmployee,
        });
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({
            success: false,
            message: "Error creating employee",
            error: error.message,
        });
    }
};

const getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            message: "Employee retrieved successfully",
            data: employees,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retriveing employees",
            error: error.message,
        });
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Employee retrieved successfully",
            data: employee,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving employee",
            error: error.message,
        });
    }
};
const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({
                message: "Employee not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Employee delete successfully",
                employee,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        if (updates.password) {
            delete updates.password;
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
            new: true,
            runValidators: true,
        });
        if (!updateEmployee) {
            return res.status(404).json({
                message: "employee not found",
            });
        }
        res.status(200).json({
            message: "employee updated successfully",
            updatedEmployee,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
export {
    createEmployee,
    getEmployee,
    getEmployeeById,
    deleteEmployee,
    updateEmployee,
};
export default createEmployee;
