import fs, { readdirSync, createReadStream, ReadStream, lstatSync } from "fs";
import path, { join } from "path";
import { Configuration } from "../Config";
import { Directory } from "../Database/Entities/Directory";
import { File } from "../Database/Entities/File";
import { Image } from "../Database/Entities/Image";
import { Keyword } from "../Database/Entities/Keyword";
import { scanFiles, walk } from "./FileService";
export class ImageService {
    private imageDirectory: string;

    constructor(imageDirectory: string) {
        this.imageDirectory = imageDirectory;
    }

    public async init() {
        const res = this.imageDirectory;
        const dirName = path.basename(res);
        const rootDir = new Directory(res, dirName);
        rootDir.children = await scanFiles(rootDir);
        rootDir.save();
    }

    public static async GetImages(): Promise<File[]> {
        return [
            ...(await (await Image.find()).map((x) => x.toJSON())),
            ...(await (await Directory.find()).map((x) => x.toJSON()))
        ];
    }

    /*     public static GetImages(): IFileInfo[] {
        let files = readdirSync(Configuration.Web.ImageDirectory);
        let filesWithInfo: IFileInfo[] = [];
        // TODO: Optimize
        for (const file of files) {
            let fileInfo = lstatSync(
                join(Configuration.Web.ImageDirectory, file)
            );
            filesWithInfo.push({
                name: file,
                isDirectory: fileInfo.isDirectory()
            });
        }

        // Return only images and directories
        return filesWithInfo.filter((x) => {
            if (!x.isDirectory) {
                return x.name.endsWith(".png");
            } else return true;
        });
    } */

    public static GetImage(imageName: string): ReadStream {
        return createReadStream(
            join(Configuration.Web.ImageDirectory, imageName)
        );
    }
}

interface IImageInfo {
    name: string;
    relativePath: string;
}

interface IFileInfo {
    name: string;
    isDirectory: boolean;
}
