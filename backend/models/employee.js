import { mongoose } from "mongoose";
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    }
});
const Employee=mongoose.model('Employee',employeeSchema);
export default Employee;