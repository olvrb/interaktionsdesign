import {
    AfterInsert,
    AfterLoad,
    AfterUpdate,
    BaseEntity,
    Column,
    Entity,
    Generated,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import { Keyword } from "./Keyword";
import { Image } from "./Image";
import { File } from "./File";

@Entity()
export class Directory extends File {
    public isDirectory(): boolean {
        return true;
    }
    /**
     *
     */
    constructor(path: string, dirName: string) {
        super(path, dirName);
    }

    @OneToMany(
        (type) => Image,
        (image) => image.directory,
        { cascade: true }
    )
    public images: Image[];

    @OneToMany(
        (type) => Directory,
        (dir) => dir.parent,
        { cascade: true }
    )
    public children: Directory[];

    @ManyToOne(
        (type) => Directory,
        (dir) => dir.children
    )
    public parent: Directory;
}
