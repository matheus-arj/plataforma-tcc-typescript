import { Inject, Injectable, Logger } from '@nestjs/common';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class FindProductUseCase {
  private readonly $logger = new Logger(FindProductUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(id: string) {
    this.$logger.log(`Finding product with id: ${id}`);
    return this.$productsRepository.findById(id);
  }
}
