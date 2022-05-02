import {
    Entity,
    BaseEntity as TBaseEntity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn
} from "typeorm";

@Entity()
export class BaseEntity extends TBaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @CreateDateColumn()
    public createdOn: Date;

    @UpdateDateColumn()
    public updatedOn: Date;
}
