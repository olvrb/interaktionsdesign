import { Request, Response, NextFunction } from "express";
import { Image } from "../../../Database/Entities/Image";
import { ImageService } from "../../../Services/ImageService";
export async function ReadImageInfoHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const id = req.params.id;

    const image = await ImageService.GetImage(id);
    res.json(image);
}
