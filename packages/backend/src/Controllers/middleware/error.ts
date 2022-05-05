import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export async function ErrorHandler(
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.json({ error: err });
}
