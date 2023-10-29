import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { ProductManufacturerOrderEntity } from "~modules/product-manufacturer-order/entities/product-manufacturer-order.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";
import { ImportCardEntity } from "~modules/import-card/entities/import-card.entity";
import { ManufacturerEntity } from "~modules/manufacturer/entities/manufacturer.entity";
import { BaseEntity } from "~common/base";

@Entity('manufacturer_order')
export class ManufacturerOrderEntity extends BaseEntity {
  @Column({ type: 'datetime' })
  orderDate: Date;

  @OneToMany(
    () => ProductManufacturerOrderEntity,
    (productManufacturerOrder) => productManufacturerOrder.manufacturerOrder,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productManufacturerOrders: ProductManufacturerOrderEntity[];

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.manufacturerOrders,
  )
  staff: StaffEntity;

  @OneToOne(
    () => ImportCardEntity,
    (importCard) => importCard.manufacturerOrder,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  importCard: ImportCardEntity;

  @ManyToOne(
    () => ManufacturerEntity,
    (manufacturer) => manufacturer.manufacturerOrders,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  manufacturer: ManufacturerEntity;
}