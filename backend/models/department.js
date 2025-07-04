import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    }
});

const Department = mongoose.model('Department', departmentSchema);
export default Department;