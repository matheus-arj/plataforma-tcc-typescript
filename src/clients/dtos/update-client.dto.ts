import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value).toISOString()) // Transform the date to ISO-8601
  birthdate?: Date;
}
