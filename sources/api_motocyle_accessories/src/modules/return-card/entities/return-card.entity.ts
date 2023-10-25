import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BaseEntity } from "~common/base";
import { InvoiceEntity } from "~modules/invoice/entities/invoice.entity";
import { ProductCustomerOrderEntity } from "~modules/product-customer-order/entities/product-customer-order.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";

@Entity('return_card')
export class ReturnCardEntity extends BaseEntity {
  @OneToMany(
    () => ProductCustomerOrderEntity,
    (productCustomerOrder) => productCustomerOrder.returnCard,
  )
  productCustomerOrders: ProductCustomerOrderEntity[];

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.returnCards,
  )
  staff: StaffEntity;

  @ManyToOne(
    () => InvoiceEntity,
    (invoice) => invoice.returnCards,
  )
  invoice: InvoiceEntity;
}