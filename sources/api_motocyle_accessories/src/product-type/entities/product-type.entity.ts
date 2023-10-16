import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_types')
export class ProductTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
