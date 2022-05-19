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
import { Directory } from "./Directory";

@Entity()
export abstract class File extends BaseEntity {
    /**
     *
     */
    constructor(path: string, fileName: string) {
        super();
        this.path = path;
        this.fileName = fileName;
        // this.isDirectory = isDirectory;
    }
    @PrimaryGeneratedColumn("uuid")
    public Id: string;

    @Column()
    public path: string;

    @Column()
    public fileName: string;

    /* @Column()
    public isDirectory: boolean; */

    public abstract isDirectory(): boolean;

    public toJSON() {
        return {
            ...this,
            isDirectory: this.isDirectory()
        };
    }
}
