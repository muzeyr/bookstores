import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Inventory } from './Inventory.entity';
import { Book } from './book.entity';
import { BaseEntity } from '../base.entity';

@Entity()
export class BookStore extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Book, (book) => book.inventory)
  @JoinTable()
  books: Book[];
}
