import { readdirSync, createReadStream, ReadStream } from "fs";
import { join } from "path";
import { Configuration } from "../Config";
export class ImageService {
    public static GetImages(): Array<string> {
        let files = readdirSync(Configuration.Web.ImageDirectory);
        return files.filter((x) => x.endsWith(".png"));
    }

    public static GetImage(imageName: string): ReadStream {
        return createReadStream(
            join(Configuration.Web.ImageDirectory, imageName)
        );
    }
}
