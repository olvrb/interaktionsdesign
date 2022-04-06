import {
    BaseEntity,
    Column,
    Entity,
    Generated,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    TableInheritance
} from "typeorm";
import { Directory } from "./Directory";
import { File } from "./File";
import { Keyword } from "./Keyword";

@Entity()
export class Image extends File {
    public isDirectory(): boolean {
        return false;
    }
    /**
     *
     */
    constructor(path: string, fileName: string) {
        super(path, fileName);
    }

    @ManyToOne(
        (type) => Directory,
        (dir) => dir.images
    )
    public directory: Directory;

    @OneToMany(
        (type) => Keyword,
        (item) => item.image
    )
    public keywords: Keyword[];
}
