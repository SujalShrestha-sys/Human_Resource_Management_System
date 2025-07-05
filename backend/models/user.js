import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["admin", "manager", "employee"],
            default: "employee",
        },
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
        },
        designation: {
            type: String,
            trim: true,
        },
        salary: {
            type: Number,
            min: 0,
        },
        profileImage: {
            type: String,
        },
        phoneNumber: {
            type: String,
            match: /^\d{10,15}$/,
        },
        address: {
            type: String,
        },
        dateOfJoining: {
            type: Date,
            default: Date.now,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model(User, "userSchema");

export default User;
