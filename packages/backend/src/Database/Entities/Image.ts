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
import { CategoryService } from "../../Services/CategoryService";

@Entity()
export class Image extends BaseEntity {
    constructor(
        name: string,
        description: string,
        uses: number,
        keywords: Keyword[],
        category: Category | null
    ) {
        super();
        this.name = name;
        this.description = description;
        this.usesLeft = uses;
        this.keywords = keywords;
        if (category) this.category = category;
    }

    @BeforeRemove()
    public async beforeRemove() {
        ImageService.DeleteImageFile(this.getFileName());
    }

    public async setCategory(categoryId) {
        this.category = await Category.findOne(categoryId);
    }

    public static async createImage(
        name: string,
        description: string,
        categoryId: string,
        uses: number,
        keywords: string[]
    ) {
        // find existing keywords with same name, else create new one
        const dbKeywords = await Promise.all(
            keywords.map(async (keyword) => {
                return (
                    (await Keyword.findOne({ where: { name: keyword } })) ??
                    new Keyword(keyword)
                );
            })
        );
        const category = await CategoryService.GetCategory(categoryId);

        // convert all keyword strings to keyword entities
        const image = new Image(name, description, uses, dbKeywords, category);
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
        (category) => category.images,
        { cascade: true, eager: true }
    )
    public category: Category | null;

    @ManyToMany(
        (type) => Keyword,
        (keyword) => keyword.images,
        { cascade: true, eager: true }
    )
    @JoinTable()
    public keywords: Keyword[];
}
