import {Column, Entity, PrimaryColumn} from "typeorm";
import {Purchase} from "./Purchase";

// "DocEntry","ProductCode","ProductName","Qty","UnitPrice","LineId"
@Entity("Tbl_PurchaseRows")
export class PurchaseRow {

    // @PrimaryGeneratedColumn()

    @PrimaryColumn({type:"numeric"})
    DocEntry: number;
    @Column({type:"varchar",length:255,nullable:true})
    ProductCode: string;
    @Column({type:"varchar",length:255,nullable:true})
    ProductName: string;
    @Column({type:"numeric",nullable:true})
    Qty: number;
    @Column({type:"numeric",nullable:true})
    UnitPrice: number;
    @PrimaryColumn({type:"numeric"})
    LineId: number;
    // @ManyToOne(() => Purchase, (purchase) => purchase.rows)
    // purchase: Purchase;

}
