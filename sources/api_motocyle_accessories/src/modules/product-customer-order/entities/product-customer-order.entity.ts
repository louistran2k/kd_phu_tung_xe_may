import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CustomerOrderEntity } from "~modules/customer-order/entities/customer-order.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";
import { ReturnCardEntity } from "~modules/return-card/entities/return-card.entity";

@Entity('product_customer_order')
export class ProductCustomerOrderEntity {
  @PrimaryColumn('uuid')
  productId: string;

  @PrimaryColumn('uuid')
  customerOrderId: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.productCustomerOrders,
  )
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @ManyToOne(
    () => CustomerOrderEntity,
    (customerOrder) => customerOrder.productCustomerOrders,
  )
  @JoinColumn({ name: 'customerOrderId' })
  customerOrder: CustomerOrderEntity;

  @ManyToOne(
    () => ReturnCardEntity,
    (returnCard) => returnCard.productCustomerOrders,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  returnCard: ReturnCardEntity;

  @Column({ type: 'int' })
  returnQuantity: number;
}