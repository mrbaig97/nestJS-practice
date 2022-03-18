import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("student")
export class Student{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    fname:string;
    @Column()
    lname:string;
}