import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Products } from '@prisma/client';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class FindProductUseCase {
  private readonly $logger = new Logger(FindProductUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(id: string): Promise<Products> {
    this.$logger.log(`Finding product with id: ${id}`);
    const product = await this.$productsRepository.findById(id);

    if (!product) {
      this.$logger.error(`Product with id ${id} not found`);
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }
}
