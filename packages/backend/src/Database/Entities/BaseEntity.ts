import {
    Entity,
    BaseEntity as TBaseEntity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn
} from "typeorm";

export abstract class BaseEntity extends TBaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @CreateDateColumn()
    public createdOn: Date;

    @UpdateDateColumn()
    public updatedOn: Date;
}
