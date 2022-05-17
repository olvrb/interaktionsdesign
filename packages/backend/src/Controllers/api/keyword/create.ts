import { Request, Response, NextFunction } from "express";
import { getTreeRepository } from "typeorm";
import { Category } from "../../../Database/Entities/Category";
import { Keyword } from "../../../Database/Entities/Keyword";

export async function CreateKeywordHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { name } = req.body;
    const dbKeyword = await new Keyword(name).save();

    res.json({ id: dbKeyword.id });
}
