import { Request, Response, NextFunction } from "express";
import { getTreeRepository } from "typeorm";
import { Category } from "../../../Database/Entities/Category";

export async function ReadCategoryHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.json(await getTreeRepository(Category).findTrees());
}
