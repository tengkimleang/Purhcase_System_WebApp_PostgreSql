import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import {PurchaseRow} from "./PurchaseRow";

@Entity("Tbl_Purchases")
export class Purchase {
    @PrimaryGeneratedColumn({name:"DocEntry"})
    purchase_number:number;
    @Column({type:"varchar",length:255})
    vendor_name:string;
    @Column({type:"varchar",length:255})
    vendor_code:string;
    @Column({type:"date",nullable:true})
    purchase_date:Date;
    @Column({type:"varchar",length:255})
    ship_to:string;
    @Column({type:"text"})
    remarks:string;
}
