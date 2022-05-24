import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm"; /*har vi typeorm library? */
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Clients extends BaseEntity {
    @PrimaryGeneratedColumn()
    clientId: number;

    @Column()
    description: string;

    @Column()
    discount: number;
}
