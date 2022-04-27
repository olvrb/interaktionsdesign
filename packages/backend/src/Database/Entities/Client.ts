import {
    Entity,     
    Column, 
    PrimaryGeneratedColumn
} from "typeorm"; /*har vi typeorm library? */

@Entity()
export class Clients /*Extends? den är inte kopplad på lucidchart så isåfall till vad*/{
    
    @PrimaryGeneratedColumn()
    clientId: number;

    @Column()
    description: string;

    @Column()
    discount: number; /*Ska jag sätta ett max och isåfall hur?*/

}