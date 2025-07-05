import User from "../models/user";
import bcrypt from "bcrypt.js"

const createUser = async (req, res) => {
    try{
        const user = new User(req.body);
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        
        const savedUser = await user.save();
        res.status(201).json({
            success : true,
            message : "User created successfully",
            data : savedUser
        });
    }catch(error){
        console.log("Error while creating the user: ", error);
        res.status(500).json({
            success : false,
            message : "Error creating the user",
            error : error.message,
        })
    }
}

const getUser = async(req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            success : true,
            message : "User retrieved successfully",
            data : users

        })

    }catch(error){
        res.staus(500).json({
            success : false,
            message : "Error receiving users",
            error : error.message,
        })
    }
}


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

/* const getUsersId = async (req, res) => {
    const {}
} */