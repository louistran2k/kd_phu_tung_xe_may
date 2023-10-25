import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { BaseEntity } from "~common/base";
import { AccountEntity } from "~modules/account/entities/account.entity";
import { CustomerOrderEntity } from "~modules/customer-order/entities/customer-order.entity";

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ type: 'tinyint', nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
  address: string;

  @Column({ length: 10 })
  phoneNumber: string;

  @OneToOne(
    () => AccountEntity,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn({ referencedColumnName: 'email' })
  account: AccountEntity;

  @OneToMany(
    () => CustomerOrderEntity,
    (customerOrder) => customerOrder.customer,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  customerOrders: CustomerOrderEntity[];
}
