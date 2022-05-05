import {
    Column,
    Entity,
    Generated,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    TableInheritance
} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";
import { Keyword } from "./Keyword";
import { JoinTable } from "typeorm";

@Entity()
export class Image extends BaseEntity {
    @Column()
    public name: string;

    @Column()
    public fileName: string;

    @Column()
    public description: string;

    @Column()
    public usesLeft: number;

    @ManyToOne(
        (type) => Category,
        (category) => category.images
    )
    public category: Category;

    @ManyToMany(() => Keyword , (keyword) => keyword.images)
    @JoinTable()
    public keywords: Keyword[];
}
