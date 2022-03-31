import { readdirSync, createReadStream, ReadStream, lstatSync } from "fs";
import { join } from "path";
import { Configuration } from "../Config";
export class ImageService {
    public static GetImages(): IFileInfo[] {
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
    }

    public static GetImage(imageName: string): ReadStream {
        return createReadStream(
            join(Configuration.Web.ImageDirectory, imageName)
        );
    }
}

interface IFileInfo {
    name: string;
    isDirectory: boolean;
}
