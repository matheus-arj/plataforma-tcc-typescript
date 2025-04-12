import { Inject, Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsRepository {
  @Inject(PrismaService)
  private readonly $db: PrismaService;

  public async findAll(): Promise<Products[]> {
    return await this.$db.products.findMany();
  }

  public async findById(id: string) {
    return await this.$db.products.findUnique({
      where: { id },
    });
  }

  public async create(data: CreateProductDto): Promise<Products> {
    return await this.$db.products.create({
      data,
    });
  }

  public async update(id: string, data: UpdateProductDto): Promise<Products> {
    return await this.$db.products.update({
      where: { id },
      data,
    });
  }
}
