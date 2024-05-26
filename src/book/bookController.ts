import path from "node:path";
import fs from "node:fs";
import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";

import { AuthRequest } from "../middlewares/authenticate";
import userModel from "../user/userModel";


const createBook = async (req:Request,res:Response,next:NextFunction)=>{
    const {title,genre,description} = req.body;

    const files = req.files as {[fieldname :string]:Express.Multer.File[]};
    const fileName = files.coverImage[0].filename;
    const coverImageMimeType =files.coverImage[0].mimetype.split("/").at(-1);
    const filePath = path.resolve(
        __dirname,
        "../../public/data/uploads",
        fileName
    );

    try{
        const uploadResult = await cloudinary.uploader.upload(filePath,{
            filename_override:fileName,
            folder:"book-covers",
            format:coverImageMimeType
        })

        const bookFileName = files.file[0].fieldname;
        const bookFilePath = path.resolve(
            __dirname,
            "../../public/data/uploads",
            bookFileName
        )

        const bookFileUploadResult = await cloudinary.uploader.upload(bookFilePath,{
            resource_type:"raw",
            filename_override:bookFileName,
            folder:"book-pdfs",
            format:"pdf"
        });

        const _req = req as AuthRequest;
        

        const newBook = await bookModel.create({
            title,
            description,
            genre,
            author:
        })
    }catch(err){

    }
}