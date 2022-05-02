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
}
