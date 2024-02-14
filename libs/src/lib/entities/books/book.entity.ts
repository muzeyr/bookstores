import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Inventory } from './Inventory.entity';
import { BaseEntity } from '../base.entity';

@Entity()
export class Book extends BaseEntity {
  @Column()
  title: string;

  @Column()
  author: string;

  @OneToMany(() => Inventory, (inventory) => inventory.book)
  inventory!: Inventory[];
}
