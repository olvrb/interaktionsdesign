import { Request, Response, NextFunction } from "express";
import { getTreeRepository, Like } from "typeorm";
import { Category } from "../../../Database/Entities/Category";
import { Image } from "../../../Database/Entities/Image";

export async function SearchImagesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    let { titleQuery, keywordQuery } = req.query;
    console.log(titleQuery, keywordQuery);

    if (!titleQuery) titleQuery = "";
    if (!keywordQuery) keywordQuery = "";

    let dbImages: Image[] = await (
        await Image.find({ where: { name: Like(`%${titleQuery}%`) } })
    ).filter((x) =>
        x.keywords.some((x) => x.name.includes(keywordQuery as string))
    );

    res.json(dbImages);
}
