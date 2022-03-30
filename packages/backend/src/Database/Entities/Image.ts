import {
    BaseEntity,
    Entity,
    Generated,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public Id: String;
}
