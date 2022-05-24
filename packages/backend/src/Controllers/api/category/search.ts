import { Request, Response, NextFunction } from "express";
import { getTreeRepository, Like } from "typeorm";
import { Category } from "../../../Database/Entities/Category";

export async function SearchCategoriesHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    let { query } = req.params;
    if (!query) query = "";

    // Find all categories that match the query
    let dbCategories: Category[];

    // Retrieve all categories in a tree and filter by name
    dbCategories = (await getTreeRepository(Category).findTrees()).filter(
        (x) => {
            return (
                x.children && x.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    );

    res.json(dbCategories);
}
