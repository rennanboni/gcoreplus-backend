import { Column, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SCHEMA } from '../gcoreplus-user.contants';

@Index('UQ_a49c375f99e0d021a0100eba680', ['name'], { unique: true })
@Entity('User', { schema: SCHEMA })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'Id' })
  id: number;

  @Column('character varying', { name: 'FirstName', length: 150 })
  firstName: string;

  @Column('character varying', { name: 'LastName', length: 150 })
  lastName: string;

  @Column('timestamp without time zone', { name: 'CreatedAt', nullable: true, default: () => 'now()' })
  createdAt: Date | null;

  @UpdateDateColumn({ type: 'timestamp without time zone', name: 'UpdatedAt', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ type: 'timestamp without time zone', name: 'DeletedAt', nullable: true })
  deletedAt: Date | null;
}
