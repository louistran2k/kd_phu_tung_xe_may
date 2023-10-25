import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { ProductImportCardEntity } from "~modules/product-import-card/entities/product-import-card.entity";
import { ManufacturerOrderEntity } from "~modules/manufacturer-order/entities/manufacturer-order.entity";
import { StaffEntity } from "~modules/staff/entities/staff.entity";
import { BaseEntity } from "~common/base";

@Entity('import_card')
export class ImportCardEntity extends BaseEntity {
  @Column({ type: 'date' })
  importDate: Date;

  @Column({ type: 'float' })
  totalPrice: number;

  @OneToMany(
    () => ProductImportCardEntity,
    (productImportCard) => productImportCard.importCard,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  productImportCards: ProductImportCardEntity[];

  @OneToOne(
    () => ManufacturerOrderEntity,
    (manufacturerOrder) => manufacturerOrder.importCard,
  )
  @JoinColumn({ referencedColumnName: 'id' })
  manufacturerOrder: ManufacturerOrderEntity;

  @ManyToOne(
    () => StaffEntity,
    (staff) => staff.importCards,
  )
  staff: StaffEntity;
}