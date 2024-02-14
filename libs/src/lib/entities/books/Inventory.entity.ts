import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';
import { BookStore } from './book.store.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(
    () => BookStore,
    (bookstore: { inventory: any }) => bookstore.inventory
  )
  bookstore: BookStore;

  @ManyToOne(() => Book, (book) => book.inventory)
  book: Book;

  @Column()
  bookstoreId: number;

  @Column()
  bookId: number;
}
