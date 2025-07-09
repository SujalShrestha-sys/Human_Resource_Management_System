import Attendance from "../models/attendance.js";

export const createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).json({
            success: true,
            message: 'Attendance recorded successfully',
            data: attendance
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create attendance',
            error: error.message
        });
    }
};

export const getAttendance = async (req, res) => {
    try {
        const records = await Attendance.find().populate("userId", "name email");
        res.status(200).json({
            success: true,
            message: "attendance fetched successfully",
            data: records
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch attedance.",
            error: error.message
        })
    }
}

export const getAttendanceById = async (req, res) => {
    try {
        const record = await Attendance.findById(req.params.id).populate("userId");

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Record not found",
            })
        } else {
            return res.status(200).json({
                success: true,
                data: record
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch individual attendance",
            error: error.message
        })

    }
}

export const updateAttendance = async (req, res) => {
    try {
        const updated = await Attendance.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Records not found in the database."
            })
        } else {
            res.json({
                status: true,
                message: "record updated successsfully.",
                data: updated
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while updating records",
            error: error.message
        });

    }
}

export const deleteAttendance = async (req, res) => {
    try {
        const deleted = await Attendance.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Records not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "record deleted successfully",
                data: deleted
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while deleting record",
            error: error.message
        })
    }
}