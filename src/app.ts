import express, { NextFunction ,Response,Request} from "express";
import { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorsHandler from "./middlewares/globalErrorsHandling";
const app = express();


app.get('/',(req,res)=>{
    
    return res.json("Hello")
})



app.use(globalErrorsHandler)


export default app;