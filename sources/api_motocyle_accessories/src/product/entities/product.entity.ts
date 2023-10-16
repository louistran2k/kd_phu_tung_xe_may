import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  images: string;

  @Column()
  unit: string;

  @Column({
    type: 'int',
  })
  quantityInStock: number;
}
