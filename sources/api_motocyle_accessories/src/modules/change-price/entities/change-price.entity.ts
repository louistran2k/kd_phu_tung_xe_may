import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductEntity } from "~modules/product/entities/product.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";

@Entity('change_price')
export class ChangePriceEntity {
  @PrimaryColumn('uuid')
  productId: string;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.changePrices,
  )
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @PrimaryColumn({ type: 'datetime' })
  applyDate: Date;

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.changePrices,
  )
  staff: StaffEntity;

  @Column({ type: 'float' })
  price: number;
}