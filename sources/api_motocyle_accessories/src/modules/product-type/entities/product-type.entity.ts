import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "~common/base";
import { ProductGroupEntity } from "~modules/product-group/entities/product-group.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";

@Entity('product_type')
export class ProductTypeEntity extends BaseEntity {
  @Column({ unique: true, length: 50 })
  name: string;

  @ManyToOne(
    () => ProductGroupEntity,
    (group) => group.types,
  )
  group: ProductGroupEntity;

  @OneToMany(
    () => ProductEntity,
    (product) => product.type,
  )
  products?: ProductEntity[];
}
