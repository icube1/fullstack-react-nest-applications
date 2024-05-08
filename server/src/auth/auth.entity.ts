import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { number, string } from 'zod';

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    fullname: string;

    @Column()
    password: string;

    @Column()
    role: string;
}

@Entity()
export class Vendor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
    
    @Column()
    role: string;

    @Column("text", {array: true})
    permissions: string[];
}