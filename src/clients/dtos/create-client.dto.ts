import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value).toISOString()) // Transform the date to ISO-8601
  birthdate: Date;
}
