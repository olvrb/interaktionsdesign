import { JoinTable, ManyToMany, Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Image } from "./Image";

@Entity()
export class Keyword extends BaseEntity {
    constructor(name: string) {
        super();
        this.name = name;
    }

    @Column()
    public name: string;

    @ManyToMany(
        (type) => Image,
        (image) => image.keywords
    )
    @JoinTable()
    public images: Image[];
}
