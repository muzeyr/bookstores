import { CreateBookDto, CreateBookStoreDto,UpdateBookQuantityDto } from '@eadam/libs/dto';
import { Book, BookStore,Inventory } from '@eadam/libs/entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isDefined } from 'class-validator';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
    @InjectRepository(BookStore)
    private readonly bookStoreRepo: Repository<BookStore>
    @InjectRepository(Inventory)
    private readonly inventoryRepo: Repository<Inventory>

    
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }
  async createBookStore(createBookStoreDto: CreateBookStoreDto): Promise<BookStore> {
    const bookStore = this.bookStoreRepo.create(createBookStoreDto);
  
    return await this.bookStoreRepo.save(bookStore);
  }
  async updateBookQuantity(updateBookQuantityDto: UpdateBookQuantityDto): Promise<BookStore> {
    const findinventor = await this.inventoryRepo.findOne({
      where:{
        book:updateBookQuantityDto.book,
        bookStore:updateBookQuantityDto.bookStore
      }
    });
    if(isDefined(findinventor)){
      findinventor.quantity = updateBookQuantityDto.quantity;
      return await this.bookStoreRepo.save(findinventor);

    } else {
      const inventor = await this.inventoryRepo.create();
    
      inventor.book = updateBookQuantityDto.book; 
      inventor.bookStore = updateBookQuantityDto.bookStore;
      inventor.quantity = updateBookQuantityDto.quantity;
      
      return await this.bookStoreRepo.save(inventor);

    }

  }

}
