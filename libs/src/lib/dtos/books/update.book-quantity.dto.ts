import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateBookQuantityDto {
  @IsNotEmpty()
  @IsString()
  readonly bookstoreId: string;

  @IsNotEmpty()
  @IsString()
  readonly bookId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}
