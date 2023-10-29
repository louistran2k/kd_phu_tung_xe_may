import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ManufacturerOrderEntity } from "~modules/manufacturer-order/entities/manufacturer-order.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";

@Entity('product_manufacturer_order')
export class ProductManufacturerOrderEntity {
  @PrimaryColumn('uuid')
  productId: string;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.productManufacturerOrders,
  )
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @PrimaryColumn('uuid')
  manufacturerOrderId: string;

  @ManyToOne(
    () => ManufacturerOrderEntity,
    (manufacturerOrder) => manufacturerOrder.productManufacturerOrders,
  )
  @JoinColumn({ name: 'manufacturerOrderId' })
  manufacturerOrder: ManufacturerOrderEntity;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;
}