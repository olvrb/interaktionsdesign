import { Request, Response, NextFunction } from "express";
import fs from "fs";
import stream from "stream";
import { ImageService } from "../../../Services/ImageService";
export async function ImageHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const r = await ImageService.GetImageFile(req.params.id); // or any other way to get a readable stream
    const ps = new stream.PassThrough(); // <---- this makes a trick with stream error handling
    stream.pipeline(
        r,
        ps, // <---- this makes a trick with stream error handling
        (err) => {
            if (err) {
                console.log(err); // No such file or any other kind of error
                return res.sendStatus(400);
            }
        }
    );
    ps.pipe(res); // <---- this makes a trick with stream error handling
}
