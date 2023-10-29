import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "~common/base";
import { ManufacturerEntity } from "~modules/manufacturer/entities/manufacturer.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";

@Entity('motorcycle')
export class MotorcycleEntity extends BaseEntity {
  @Column({ length: 50, unique: true })
  name: string;

  @ManyToOne(
    () => ManufacturerEntity,
    (manufacturer) => manufacturer.motorcycles
  )
  manufacturer: ManufacturerEntity;

  @ManyToMany(
    () => ProductEntity,
    (product) => product.motorcycles,
  )
  products?: ProductEntity[];
}