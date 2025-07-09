import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
/* import emp from "./routes/employeeRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import leaveRoutes from"./routes/leaveRoutes.js";
import payrollRoutes from "./routes/payrollRoutes.js";
import performanceRoutes from "./routes/performanceRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import departmentRoutes from "./routes/departmentRoute.js"; */
import routes from "./routes/index.js"

/* import { profileMiddleware } from "./middleware/profileMiddleware.js"; */

dotenv.config();

const app = express();
const port = process.env.PORT;



//middleware
app.use(express.json());

//Routes
app.use("/api", routes);

const MongoDb_Url = process.env.MONGODB_URL;
const dbConnection = mongoose.connect(MongoDb_Url);

dbConnection
  .then(() => {
    console.log("Connected to mongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to server:", error);
    process.exit(1);
  });

 
/* app.use("/api/employees", emp);
app.use('/api/departments', departmentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/payrolls', payrollRoutes);
app.use('/api/performance', performanceRoutes);
app.use("/api/auth",authRoutes );
 */
//mount route modules
/* router */

app.get("/",(req,res)=>{
  res.send("Hello Muraaa jgg")
})

/* 

app.get("/profile", profileMiddleware, (req, res) => {
  res.send("sujal God");
});


 app.get("/profile", (req, res) => {
    res.send("Hello world")
  })
 */

app.listen(port, () => {
  console.log("Example listening at ", `http://localhost:${port}`);
});
