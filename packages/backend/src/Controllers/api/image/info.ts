import { Request, Response, NextFunction } from "express";
import { Image } from "../../../Database/Entities/Image";
import { ImageService } from "../../../Services/ImageService";
export async function ReadImageHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const id = req.params.id;

    res.json(await ImageService.GetImage(id));
}
