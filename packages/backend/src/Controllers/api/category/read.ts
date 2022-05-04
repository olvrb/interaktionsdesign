import { Request, Response, NextFunction } from "express";
import { getTreeRepository } from "typeorm";
import { Category } from "../../../Database/Entities/Category";

export async function ReadCategoriesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.json(await getTreeRepository(Category).findTrees());
}
