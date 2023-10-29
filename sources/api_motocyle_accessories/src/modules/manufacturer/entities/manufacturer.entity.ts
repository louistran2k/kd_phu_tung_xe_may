import { Column, Entity, OneToMany } from "typeorm";
import { MotorcycleEntity } from "~modules/motorcycle/entities/motorcycle.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";
import { ManufacturerOrderEntity } from "~modules/manufacturer-order/entities/manufacturer-order.entity";
import { BaseEntity } from "~common/base";

@Entity('manufacturer')
export class ManufacturerEntity extends BaseEntity {
  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  address: string;

  @Column()
  email: string;

  @Column({ length: 10 })
  phoneNumber: string;

  @OneToMany(
    () => MotorcycleEntity,
    (motorcycle) => motorcycle.manufacturer,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  motorcycles?: MotorcycleEntity[];

  @OneToMany(
    () => ProductEntity,
    (product) => product.manufacturer,
  )
  products?: ProductEntity[];

  @OneToMany(
    () => ManufacturerOrderEntity,
    (manufacturerOrder) => manufacturerOrder.manufacturer,
  )
  manufacturerOrders?: ManufacturerOrderEntity[];
}