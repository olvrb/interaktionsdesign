import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    Tree,
    TreeChildren,
    TreeParent
} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Image } from "./Image";

@Entity()
@Tree("closure-table")
export class Category extends BaseEntity {
    constructor(name: string, parent?: Category, children?: Category[]) {
        super();
        this.name = name;
        // if (children) this.children = children;
        if (parent) this.parent = parent;
    }

    public async addChildren(children: Category[]) {
        for (const child of children) {
            child.setParent(this);
        }
    }

    public setParent(parent: Category) {
        this.parent = parent;
    }

    @Column()
    public name: string;

    @TreeChildren({ cascade: true })
    public children: Category[] | null;

    @TreeParent({ onDelete: "CASCADE" })
    public parent: Category | null;

    @OneToMany(
        (type) => Image,
        (image) => image.category
    )
    public images: Image[];
}
