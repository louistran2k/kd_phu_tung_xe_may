import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique } from "typeorm";
import { ERole } from "~enums";
import { CustomerEntity } from "~modules/customer/entities/customer.entity";

@Entity('accounts')
export class AccountEntity extends BaseEntity {
  @PrimaryColumn()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, type: 'text' })
  refreshToken: string;

  @Column({ type: 'enum', enum: ERole, default: ERole.CUSTOMER, nullable: false })
  role: ERole;

  @OneToOne(() => CustomerEntity, (customer) => customer.account)
  @JoinColumn({
    name: 'email',
    referencedColumnName: 'email'
  })
  customer: CustomerEntity;
}
