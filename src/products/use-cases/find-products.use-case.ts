import { Inject, Injectable, Logger } from '@nestjs/common';
import { Products } from '@prisma/client';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class FindProductsUseCase {
  private readonly $logger = new Logger(FindProductsUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(): Promise<Products[]> {
    this.$logger.log('Finding all products');
    return await this.$productsRepository.findAll();
  }
}
