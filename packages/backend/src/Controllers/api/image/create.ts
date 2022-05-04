import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { join } from "path";
import { Configuration } from "../../../Config";
import { Image } from "../../../Database/Entities/Image";
import { ImageService } from "../../../Services/ImageService";
export async function CreateImageHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.files) return res.status(400).send("No files were uploaded.");
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const { imageName, description, categoryId, uses } = req.body;
    const file = req.files.file as UploadedFile;
    const dbImage = Image.createImage(
        imageName,
        description,
        categoryId,
        +uses
    );
    const savedDbImage = await dbImage.save();

    file.mv(join(Configuration.Web.ImageDirectory, savedDbImage.id));
    res.json({ id: savedDbImage.id });
}
