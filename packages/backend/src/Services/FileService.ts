import { resolve } from "path";
import { promises } from "fs";
import { Directory } from "../Database/Entities/Directory";
import { Image } from "../Database/Entities/Image";
const { readdir } = promises;
export async function* walk(dir) {
    const dirents = await (await readdir(dir, { withFileTypes: true })).filter(
        (x) => {
            if (x.isDirectory()) {
                return true;
            } else if (x.isFile()) {
                return x.name.endsWith(".png");
            }
            return false;
        }
    );
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* walk(res);
        } else {
            yield res;
        }
    }
}

/* export async function scanFiles( 
    dirName: string,
    dirObject: Directory
): Promise<Directory> {
    if (!dirObject.images) {
        dirObject.images = [];
    }
    if (!dirObject.children) {
        dirObject.children = [];
    }
    const dirents = await (
        await readdir(dirName, { withFileTypes: true })
    ).filter((x) => {
        if (x.isDirectory()) {
            return true;
        } else if (x.isFile()) {
            return x.name.endsWith(".png");
        }
        return false;
    });

    for (const dirent of dirents) {
        const res = resolve(dirName, dirent.name);
        if (dirent.isDirectory()) {
            const rootDir = new Directory(dirent.name);
            dirObject.children.push(rootDir);
            scanFiles(res, rootDir);
        } else if (dirent.isFile()) {
            const image = new Image(dirent.name);
            image.folder = dirObject!;
            dirObject.images.push(image);
        }
    }
    dirObject.save();
    return dirObject;
} */

export async function scanFiles(rootDir: Directory): Promise<Directory[]> {
    const currentLevel = rootDir.path;
    if (!rootDir.images) {
        rootDir.images = [];
        rootDir.children = [];
    }

    const files = await readdir(currentLevel, { withFileTypes: true });
    const subDirectories = files.filter((x) => x.isDirectory());

    // Save images for current root directory
    rootDir.images = files
        .filter((x) => x.isFile() && x.name.endsWith(".png"))
        .map((x) => {
            const res = resolve(currentLevel, x.name);
            const image = new Image(res, x.name);
            image.directory = rootDir;
            return image;
        });

    // Recursively scan subdirectories
    /*     for (const subDirectory of subDirectories) {
        const res = resolve(currentLevel, subDirectory.name);

        const subDirObj = new Directory(res);
        subDirObj.parent = rootDir;
        subDirObj.children = await scanFiles(subDirObj);
        rootDir.children.push(subDirObj);
    } */

    rootDir.children = await Promise.all(
        subDirectories.map(async (subDirectory) => {
            const res = resolve(currentLevel, subDirectory.name);

            const subDirObj = new Directory(res, subDirectory.name);
            subDirObj.parent = rootDir;
            subDirObj.children = await scanFiles(subDirObj);
            return subDirObj;
        })
    );
    return rootDir.children;
}
