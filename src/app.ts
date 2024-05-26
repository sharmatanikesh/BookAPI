import express, { NextFunction ,Response,Request} from "express";
import { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorsHandler from "./middlewares/globalErrorsHandling";
import userRouter from "./user/userRouters";
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    
    return res.json("Welcome to the elib")
})

app.use("/api/v1/users",userRouter);
    
app.use(globalErrorsHandler)


export default app;