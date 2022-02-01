import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Feedbacks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'nvarchar', length: 32})
    name: string;
    
    @Column({type: 'nvarchar', length: 64})
    email: string;
    
    @Column({type: 'nvarchar', length: 1024})
    comment: string;
}