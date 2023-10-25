import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductEntity } from "~modules/product/entities/product.entity";
import { PromotionEntity } from "~modules/promotion/enities/promotion.entity";

@Entity('product_promotion')
export class ProductPromotionEntity {
  @PrimaryColumn('uuid')
  productId: string;

  @PrimaryColumn('uuid')
  promotionId: string;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.productPromotions,
  )
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @ManyToOne(
    () => PromotionEntity,
    (promotion) => promotion.productPromotions,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn({ name: 'promotionId' })
  promotion: ProductEntity;

  @Column({ type: 'int' })
  percent: number;
}