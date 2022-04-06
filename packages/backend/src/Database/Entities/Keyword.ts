import {
    BaseEntity,
    Column,
    Entity,
    Generated,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import { Image } from "./Image";

@Entity()
export class Keyword extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public Id: String;

    @ManyToOne(
        (image) => Image,
        (image) => image.keywords
    )
    public image: Image;
}
