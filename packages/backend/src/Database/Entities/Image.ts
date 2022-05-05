import {
    BeforeRemove,
    Column,
    DeleteResult,
    Entity,
    FindConditions,
    Generated,
    ManyToMany,
    ManyToOne,
    ObjectID,
    ObjectType,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    RemoveOptions,
    TableInheritance
} from "typeorm";
import { ImageService } from "../../Services/ImageService";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";
import { Keyword } from "./Keyword";
import { JoinTable } from "typeorm";

@Entity()
export class Image extends BaseEntity {
    constructor(name: string, description: string, uses: number) {
        super();
        this.name = name;
        this.description = description;
        this.usesLeft = uses;
    }

    @BeforeRemove()
    public async beforeRemove() {
        ImageService.DeleteImageFile(this.getFileName());
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
    public category: Category | null

    @ManyToMany(() => Keyword , (keyword) => keyword.images)
    @JoinTable()
    public keywords: Keyword[];
}
