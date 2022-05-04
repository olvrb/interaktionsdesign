import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { join } from "path";
import { Configuration } from "../../../Config";
import { Image } from "../../../Database/Entities/Image";
import { ImageService } from "../../../Services/ImageService";
export async function DeleteImageHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const imageId = req.params.id;
    await ImageService.DeleteImage(imageId);
    res.json({ id: imageId });
}
