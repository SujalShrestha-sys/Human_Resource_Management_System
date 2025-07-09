import Department from "../models/department.js";

const createDepartment = async (req, res) => {
    try {
        const department = new Department(req.body);
        const savedDepartment = await department.save();

        res.status(200).json({
            success: true,
            message: "Department created successfully",
            data: savedDepartment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while creating department",
            error: error.message
        })
    }
};

const getDepartment = async (req, res) => {
    try {
        const departments = await Department.find().populate("manager");
        res.status(200).json({
            success: true,
            message: "Department fetched successfully",
            data: departments
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while fetchingDepartments",
            error: error.message
        })
    }
}

const getDepartmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findById(id).populate('manager');
        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Department retrieved successfully",
            data: department
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving department",
            error: error.message
        });
    }
};
const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findByIdAndDelete(id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Department deleted successfully",
            data: department
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting department",
            error: error.message
        });
    }
};

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedDepartment = await Department.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedDepartment) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Department updated successfully",
            data: updatedDepartment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating department",
            error: error.message
        });
    }
};

export { createDepartment, deleteDepartment, updateDepartment, getDepartmentById, getDepartment }