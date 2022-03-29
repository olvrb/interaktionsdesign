import { Request, Response, NextFunction } from "express";
import { Item } from "../../../Database/Entities/Item";
export async function CreateItemHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.json(await Item.find());
}
