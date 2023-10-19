import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AccountEntity } from "~modules/account/entities/account.entity";
import { BaseEntity } from "~modules/base/base.entity";

@Entity('customers')
export class CustomerEntity extends BaseEntity {
  @Column({ length: 50, nullable: false })
  firstName: string;

  @Column({ length: 50, nullable: false })
  lastName: string;

  @Column({ type: 'bit', nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ length: 10, nullable: true })
  phoneNumber: string;

  @OneToOne(() => AccountEntity, { cascade: true })
  @JoinColumn()
  account: AccountEntity;
}
