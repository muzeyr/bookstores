import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import {
  CreateBookDto,
  CreateBookStoreDto,
  UpdateBookQuantityDto,
} from '@eadam/libs/dto';
import { Book, BookStore } from '@eadam/libs/entity';

/*
Can create a new bookstore.
● Can add a new book.
● Can add or remove a specific quantity of a particular book to/from a specific
bookstore.
● Adding new users and roles can only be done by the Admin.
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/book')
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.appService.createBook(createBookDto);
  }

  @Post('/book-store')
  async createBookStore(
    @Body() createBookStoreDto: CreateBookStoreDto
  ): Promise<BookStore> {
    return this.appService.createBookStore(createBookStoreDto);
  }

  @Post('/update-book-quantity')
  async updateBookQuantity(
    @Body() updateBookQuantityDto: UpdateBookQuantityDto
  ): Promise<BookStore> {
    return this.appService.updateBookQuantity(updateBookQuantityDto);
  }
}
