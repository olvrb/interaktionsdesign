import {
    BeforeRemove,
    Column,
    DeleteResult,
    Entity,
    ManyToMany,
    ManyToOne
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
        photographer: string,
        category: Category | null
    ) {
        super();
        this.name = name;
        this.description = description;
        this.usesLeft = uses;
        this.keywords = keywords;
        this.photographer = photographer;
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
        keywords: string[],
        photographer: string
    ) {
        // find existing keywords with same name, else create new ones
        const dbKeywords = await Promise.all(
            keywords.map(async (keyword) => {
                return (
                    (await Keyword.findOne({ where: { name: keyword } })) ??
                    new Keyword(keyword)
                );
            })
        );

        // find existing category
        const category = await CategoryService.GetCategory(categoryId);

        const image = new Image(
            name,
            description,
            uses,
            dbKeywords,
            photographer,
            category
        );
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
    public photographer: string;

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

    public getKeywords(): string[] {
        return this.keywords.map((keyword) => keyword.name);
    }
}
