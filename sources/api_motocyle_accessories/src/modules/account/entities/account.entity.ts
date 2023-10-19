import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique } from "typeorm";
import { ERole } from "~enums";
import { BaseWithoutIdEntity } from "~modules/base/base-without-id.entity";
import { CustomerEntity } from "~modules/customer/entities/customer.entity";

@Entity('accounts')
export class AccountEntity extends BaseWithoutIdEntity {
  @PrimaryColumn()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, type: 'text' })
  refreshToken: string;

  @Column({ type: 'enum', enum: ERole, default: ERole.CUSTOMER, nullable: false })
  role: ERole;
}
