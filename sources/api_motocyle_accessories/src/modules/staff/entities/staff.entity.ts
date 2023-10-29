import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { EGender } from "~enums";
import { ChangePriceEntity } from "~modules/change-price/entities/change-price.entity";
import { AccountEntity } from "~modules/account/entities/account.entity";
import { ManufacturerOrderEntity } from "~modules/manufacturer-order/entities/manufacturer-order.entity";
import { ImportCardEntity } from "~modules/import-card/entities/import-card.entity";
import { CustomerOrderEntity } from "~modules/customer-order/entities/customer-order.entity";
import { PromotionEntity } from "~modules/promotion/enities/promotion.entity";
import { ReturnCardEntity } from "~modules/return-card/entities/return-card.entity";
import { BaseEntity } from "~common/base";

@Entity('staff')
export class StaffEntity extends BaseEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ type: 'tinyint', nullable: true })
  gender: EGender;

  @Column({ type: 'datetime', nullable: true })
  birthDate: Date;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  address: string;

  @Column({ length: 10 })
  phoneNumber: string;

  @OneToMany(
    () => ChangePriceEntity,
    (changePrice) => changePrice.staff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  changePrices: ChangePriceEntity[];

  @OneToOne(
    () => AccountEntity,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn({ referencedColumnName: 'email' })
  account: AccountEntity;

  @OneToMany(
    () => ManufacturerOrderEntity,
    (manufacturerOrder) => manufacturerOrder.staff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  manufacturerOrders: ManufacturerOrderEntity[];

  @OneToMany(
    () => ImportCardEntity,
    (importCard) => importCard.staff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  importCards: ImportCardEntity[];

  @OneToMany(
    () => CustomerOrderEntity,
    (customerOrder) => customerOrder.approvalStaff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  approvalCustomerOrders: CustomerOrderEntity[];

  @OneToMany(
    () => CustomerOrderEntity,
    (customerOrder) => customerOrder.deliveryStaff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  deliveryCustomerOrders: CustomerOrderEntity[];

  @OneToMany(
    () => PromotionEntity,
    (promotion) => promotion.staff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  promotions: PromotionEntity[];

  @OneToMany(
    () => ReturnCardEntity,
    (returnCard) => returnCard.staff,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  returnCards: ReturnCardEntity[];
}