import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_groups')
export class ProductGroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
