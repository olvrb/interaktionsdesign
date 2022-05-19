import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;
}
