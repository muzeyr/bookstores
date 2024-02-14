import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookStoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
