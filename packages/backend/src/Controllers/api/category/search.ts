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

    /* if (!query) {
        dbCategories = await getTreeRepository(Category).find({
            relations: ["children", "parent"]
        });
    } else {
        dbCategories = await getTreeRepository(Category).find({
            relations: ["children", "parent"],
            where: { name: Like(`%${query}%`) }
        });
    }

    // Only keep categories that have no children (lowest level categories)
    const result: Category[] = [];
    for (const category of dbCategories) {
        if (category.children?.length === 0) {
            result.push(category);
        }
    } */

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
