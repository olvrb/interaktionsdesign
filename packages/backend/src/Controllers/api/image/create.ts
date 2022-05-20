import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { join } from "path";
import { Configuration } from "../../../Config";
import { Image } from "../../../Database/Entities/Image";
import { ImageService } from "../../../Services/ImageService";
import createHttpError, { HttpError } from "http-errors";
export async function CreateImageHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.files) {
        return next(createHttpError(404));
    }
    let {
        imageName,
        description,
        categoryId,
        uses,
        keywords,
        photographer
    } = req.body;

    // -1 is used as default if nothing else is provided
    // We can assume we own the image in this case
    if (!uses) uses = -1;

    // Retrieve the image from the request
    const file = req.files.file as UploadedFile;
    const dbImage = await Image.createImage(
        imageName,
        description,
        categoryId,
        +uses,
        keywords.split(" "),
        photographer
    );

    const savedDbImage = await dbImage.save();

    // move uploaded file to file directory
    file.mv(join(Configuration.Web.ImageDirectory, savedDbImage.id));
    res.json({ id: savedDbImage.id });
}
