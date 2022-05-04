import { DeleteResult } from "typeorm";
import { Image } from "../Database/Entities/Image";
import { createReadStream, ReadStream, unlinkSync } from "fs";
import { Configuration } from "../Config";
import { join } from "path";

export class ImageService {
    public static async GetImageFile(id: string): Promise<ReadStream> {
        const image = await Image.findOne(id);
        if (!image) {
            throw new Error("Image not found");
        }
        return createReadStream(
            join(Configuration.Web.ImageDirectory, image.getFileName())
        );
    }
    public static async GetImages(): Promise<Image[]> {
        return await Image.find();
    }
    public static async GetImage(id: string): Promise<Image | null> {
        return (await Image.findOne(id)) ?? null;
    }
    public static async CreateImage(image: Image): Promise<Image> {
        return await Image.save(image);
    }
    public static async UpdateImage(image: Image): Promise<Image> {
        return await Image.save(image);
    }
    public static async DeleteImage(id: string): Promise<void> {
        await Image.remove(await Image.findOneOrFail(id));
    }

    public static async DeleteImageFile(fileName: string): Promise<void> {
        unlinkSync(join(Configuration.Web.ImageDirectory, fileName));
    }

    public static GetFile(fileName: string): ReadStream {
        return createReadStream(
            join(Configuration.Web.ImageDirectory, fileName)
        );
    }
}
