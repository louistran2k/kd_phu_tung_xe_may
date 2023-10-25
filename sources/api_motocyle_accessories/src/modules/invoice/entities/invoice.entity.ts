import { CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { CustomerOrderEntity } from "~modules/customer-order/entities/customer-order.entity";
import { ReturnCardEntity } from "~modules/return-card/entities/return-card.entity";

@Entity('invoice')
export class InvoiceEntity {
  @PrimaryColumn()
  invoiceNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(
    () => CustomerOrderEntity,
    (customerOrder) => customerOrder.invoice,
  )
  customerOrder: CustomerOrderEntity;

  @OneToMany(
    () => ReturnCardEntity,
    (returnCard) => returnCard.invoice,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  returnCards: ReturnCardEntity[];
}