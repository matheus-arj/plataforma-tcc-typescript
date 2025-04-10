import { Inject, Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsRepository {
  @Inject(PrismaService)
  private readonly $db: PrismaService;

  public async findAll(): Promise<Products[]> {
    return await this.$db.products.findMany();
  }
}
