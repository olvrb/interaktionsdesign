import { Request, Response, NextFunction } from "express";
import { getTreeRepository, Like } from "typeorm";
import { Category } from "../../../Database/Entities/Category";

export async function SearchCategoriesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { query } = req.params;

    // Find all categories that match the query
    const dbCategories = await getTreeRepository(Category).find({
        relations: ["children", "parent"],
        where: { name: Like(`%${query}%`) }
    });

    // Only keep categories that have no children (lowest level categories)
    const result: Category[] = [];
    for (const category of dbCategories) {
        if (category.children?.length === 0) {
            result.push(category);
            console.log(category.children);
        }
    }

    res.json(result);
}