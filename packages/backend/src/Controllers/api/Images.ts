import { Request, Response, NextFunction } from "express";
import { Image } from "../../Database/Entities/Image";
import { ImageService } from "../../Services/ImageService";
export async function CreateImagesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.json(ImageService.GetImages());
    // res.json(await Item.find());
}
