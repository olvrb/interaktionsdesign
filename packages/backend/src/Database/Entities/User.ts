import {
    BaseEntity,
    Entity,     
    Column, 
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    /* @Column()
    permissionLevel: number; */ //Om vi ska lägga in fler användare senare och sätta permissions på dem

}