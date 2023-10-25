import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { ECustomerOrderStatus } from "~enums";
import { InvoiceEntity } from "~modules/invoice/entities/invoice.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";
import { CustomerEntity } from "~modules/customer/entities/customer.entity";
import { ProductCustomerOrderEntity } from "~modules/product-customer-order/entities/product-customer-order.entity";
import { BaseEntity } from "~common/base";

@Entity('customer_order')
export class CustomerOrderEntity extends BaseEntity {
  @Column({ type: 'tinyint' })
  status: ECustomerOrderStatus;

  @Column({ type: 'nvarchar', length: 'MAX' })
  receiveAddress: string;

  @Column({ type: 'datetime' })
  receiveDate: Date;

  @Column({ length: 100 })
  receiverName: string;

  @Column({ length: 10 })
  receiverPhoneNumber: string;

  @Column({ type: 'float' })
  totalPrice: number;

  @OneToMany(
    () => ProductCustomerOrderEntity,
    (productCustomerOrder) => productCustomerOrder.customerOrder,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productCustomerOrders: ProductCustomerOrderEntity[];

  @OneToOne(
    () => InvoiceEntity,
    (invoice) => invoice.customerOrder,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  invoice: InvoiceEntity;

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.approvalCustomerOrders,
  )
  approvalStaff: StaffEntity;

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.deliveryCustomerOrders,
  )
  deliveryStaff: StaffEntity;

  @ManyToOne(
    () => CustomerEntity,
    (customer) => customer.customerOrders,
  )
  customer: CustomerEntity;
}