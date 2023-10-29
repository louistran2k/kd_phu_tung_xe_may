import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "~common/base/base.entity";
import { ProductTypeEntity } from "~modules/product-type/entities/product-type.entity";

@Entity('product_group')
export class ProductGroupEntity extends BaseEntity {
  @Column({ unique: true, length: 50 })
  name: string;

  @OneToMany(
    () => ProductTypeEntity,
    (type) => type.group,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  types?: ProductTypeEntity[];
}