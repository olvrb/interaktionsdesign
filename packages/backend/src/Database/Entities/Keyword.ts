import {
    JoinTable,
    ManyToMany,
    Entity,
    Column,

} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Image } from "./Image";

@Entity()
export class Keyword extends BaseEntity {

    @Column()
    public name: string;

    @ManyToMany(() => Image , (image) => image.keywords)
    @JoinTable()
    public images: Image[];
}