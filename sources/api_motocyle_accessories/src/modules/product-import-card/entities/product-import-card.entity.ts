import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ImportCardEntity } from "~modules/import-card/entities/import-card.entity";
import { ProductEntity } from "~modules/product/entities/product.entity";

@Entity('product_import_card')
export class ProductImportCardEntity {
  @PrimaryColumn('uuid')
  productId: string;

  @PrimaryColumn('uuid')
  importCardId: string;

  @ManyToOne(
    () => ProductEntity,
    (product) => product.productImportCards,
  )
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @ManyToOne(
    () => ImportCardEntity,
    (importCard) => importCard.productImportCards,
  )
  @JoinColumn({ name: 'importCardId' })
  importCard: ImportCardEntity;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'float' })
  price: number;
}