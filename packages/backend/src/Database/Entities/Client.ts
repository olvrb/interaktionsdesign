import {
    Entity,     
    Column, 
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Clients{
    
    @PrimaryGeneratedColumn()
    clientId: number;

    @Column()
    description: string;

    @Column()
    discount: number; /*Ska jag sätta ett max och isåfall hur?*/

}