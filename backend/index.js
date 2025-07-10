import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/index.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;



//middleware
app.use(express.json());
app.use(cookieParser());

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


app.get("/",(req,res)=>{
  res.send("welcome to the world of backend")
})

app.listen(port, () => {
  console.log("Example listening at ", `http://localhost:${port}`);
});
