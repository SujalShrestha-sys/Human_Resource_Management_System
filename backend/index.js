import express from "express";
import mongoose from "mongoose";
import Employee from "./models/employee.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const MongoDb_Url = process.env.MONGODB_URL;
const dbConnection = mongoose.connect(MongoDb_Url);

dbConnection.then(() => {
    console.log("Connected");

}).catch((error) => {
    console.error("Error connecting to server:", error);
    process.exit(1);
})

import emp from "./routes/employeeRoutes.js"
app.use("/api/employees", emp);

app.get("/", (req, res) => {
    res.send("Prajwal God");
})


app.listen(port, () => {
    console.log("Example listening at ",
        `http://localhost:${port}`);
})
