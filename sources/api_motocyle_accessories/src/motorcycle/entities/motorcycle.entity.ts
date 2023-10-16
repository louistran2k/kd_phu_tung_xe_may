import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('motorcycles')
export class MotorcycleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;


}
