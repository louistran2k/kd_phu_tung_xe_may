import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { ManufacturerEntity } from "~modules/manufacturer/entities/manufacturer.entity";
import { ProductTypeEntity } from "~modules/product-type/entities/product-type.entity";
import { MotorcycleEntity } from "~modules/motorcycle/entities/motorcycle.entity";
import { ChangePriceEntity } from "~modules/change-price/entities/change-price.entity";
import { ProductImportCardEntity } from "~modules/product-import-card/entities/product-import-card.entity";
import { ProductPromotionEntity } from "~modules/product-promotion/entities/product-promotion.entity";
import { ProductManufacturerOrderEntity } from "~modules/product-manufacturer-order/entities/product-manufacturer-order.entity";
import { BaseEntity } from "~common/base";
import { ProductCustomerOrderEntity } from "~modules/product-customer-order/entities/product-customer-order.entity";

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'nvarchar', length: 'MAX' })
  name: string;

  @Column({ type: 'nvarchar', length: 'MAX' })
  description: string;

  @Column({ type: 'nvarchar', length: 'MAX' })
  images: string;

  @Column()
  isNew: boolean;

  @Column({ length: 10 })
  unit: string;

  @Column({ default: 0 })
  quantityInStock: number;

  @ManyToOne(
    () => ManufacturerEntity,
    (manufacturer) => manufacturer.products,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  manufacturer: ManufacturerEntity;

  @ManyToOne(
    () => ProductTypeEntity,
    (type) => type.products,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  type: ProductTypeEntity;

  @ManyToMany(
    () => MotorcycleEntity,
    (motorcycle) => motorcycle.products,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinTable({
    name: 'product_motorcycle',
    joinColumn: {
      name: 'productId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'motorcycleId',
      referencedColumnName: 'id',
    },
  })
  motorcycles?: MotorcycleEntity[];

  @OneToMany(
    () => ProductCustomerOrderEntity,
    (productCustomerOrder) => productCustomerOrder.product,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productCustomerOrders: ProductCustomerOrderEntity[];

  @OneToMany(
    () => ChangePriceEntity,
    (changePrice) => changePrice.product,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  changePrices: ChangePriceEntity[];

  @OneToMany(
    () => ProductImportCardEntity,
    (productImportCard) => productImportCard.product,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productImportCards: ProductImportCardEntity[];

  @OneToMany(
    () => ProductPromotionEntity,
    (productPromotion) => productPromotion.product,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productPromotions: ProductPromotionEntity[];

  @OneToMany(
    () => ProductManufacturerOrderEntity,
    (productManufacturerOrder) => productManufacturerOrder.product,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productManufacturerOrders: ProductManufacturerOrderEntity[];
}