import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "~common/base";
import { ERole } from "~enums";

@Entity('account')
export class AccountEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ type: 'nvarchar', length: 'MAX' })
  password: string;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true, default: null })
  refreshToken: string;

  @Column({ type: 'tinyint', default: ERole.CUSTOMER })
  role: ERole;

  @Column({ default: true })
  status: boolean;
}
