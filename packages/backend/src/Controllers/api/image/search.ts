import { Request, Response, NextFunction } from "express";
import { getTreeRepository, Like } from "typeorm";
import { Category } from "../../../Database/Entities/Category";
import { Image } from "../../../Database/Entities/Image";

export async function SearchImagesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    let { titleQuery, keywordQuery, categoryId } = req.query;

    if (!titleQuery) titleQuery = "";
    if (!keywordQuery) keywordQuery = "";

    // Filter images based on title and keywords
    let dbImages: Image[] = await (
        await Image.find({ where: { name: Like(`%${titleQuery}%`) } })
    ).filter((x) =>
        x.keywords.some((x) => x.name.includes(keywordQuery as string))
    );

    // If category is provided, filter using that as well
    if (typeof categoryId === "string" && categoryId !== "") {
        dbImages = dbImages.filter((x) => x.category?.id === categoryId);
    }

    res.json(dbImages);
}
