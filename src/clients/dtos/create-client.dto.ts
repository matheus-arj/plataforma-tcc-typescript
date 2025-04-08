import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

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
  @IsDateString()
  birthdate: string;
}
