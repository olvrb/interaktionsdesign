import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Image } from "./Image";

@Entity()
export class Category extends BaseEntity {
    @Column()
    public name: string;

    @OneToMany(
        (type) => Category,
        (dir) => dir.parent,
        { cascade: true }
    )
    public children: Category[];

    @ManyToOne(
        (type) => Category,
        (dir) => dir.children
    )
    public parent: Category | null;

    @OneToMany(
        (type) => Image,
        (image) => image.category
    )
    public images: Image[];
}
