
import Employee from '../models/employee.js';

const createEmployee= async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json({
            success: true,
            message: "Employe created successfully",
            data: savedEmployee
        });
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({
            success: false,
            message: "Error creating employee",
            error: error.message
        });
    }
}
export default createEmployee;