import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BaseEntity } from "~common/base";
import { ProductPromotionEntity } from "~modules/product-promotion/entities/product-promotion.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";

@Entity('promotion')
export class PromotionEntity extends BaseEntity {
  @Column({ type: 'nvarchar', length: 'MAX' })
  name: string;

  @Column({ type: 'datetime' })
  startAt: Date;

  @Column({ type: 'datetime' })
  endAt: Date;

  @OneToMany(
    () => ProductPromotionEntity,
    (productPromotion) => productPromotion.promotion,
  )
  productPromotions: ProductPromotionEntity[];

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.promotions,
  )
  staff: StaffEntity;
}