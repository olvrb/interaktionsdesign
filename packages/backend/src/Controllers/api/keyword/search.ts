import { Request, Response, NextFunction } from "express";
import { getTreeRepository, Like } from "typeorm";
import { Category } from "../../../Database/Entities/Category";
import { Keyword } from "../../../Database/Entities/Keyword";

export async function SearchKeywordsHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { query } = req.params;

    const keywords = await Keyword.find({ name: Like(`%${query}%`) });

    res.json(keywords);
}
