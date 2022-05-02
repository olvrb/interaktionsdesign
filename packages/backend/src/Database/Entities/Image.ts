import {
    Column,
    Entity,
    Generated,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    TableInheritance
} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

@Entity()
export class Image extends BaseEntity {
    constructor(name: string, description: string, uses: number) {
        super();
        this.name = name;
        this.description = description;
        this.usesLeft = uses;
    }
    public async setCategory(categoryId) {
        this.category = await Category.findOne(categoryId);
    }

    public static createImage(
        name: string,
        description: string,
        categoryId: string,
        uses: number
    ) {
        const image = new Image(name, description, uses);
        image.setCategory(categoryId);
        return image;
    }

    @Column()
    public name: string;

    public getFileName() {
        return this.id;
    }

    @Column()
    public description: string;

    @Column()
    public usesLeft: number;

    @ManyToOne(
        (type) => Category,
        (category) => category.images
    )
    public category: Category | null;
}
