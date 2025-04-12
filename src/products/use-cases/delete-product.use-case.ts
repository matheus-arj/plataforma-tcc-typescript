import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Products } from '@prisma/client';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class DeleteProductUseCase {
  private readonly $logger = new Logger(DeleteProductUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(id: string): Promise<Products> {
    this.$logger.log(`Finding product with id: ${id}`);
    const product = await this.$productsRepository.findById(id);
    this.$logger.log(`Product found: ${JSON.stringify(product)}`);

    if (!product) {
      this.$logger.error('Product not found');
      throw new NotFoundException('Product not found');
    }

    this.$logger.log(`Deleting product with id: ${id}`);
    const deletedProduct = await this.$productsRepository.delete(id);
    this.$logger.log(`Product deleted: ${JSON.stringify(deletedProduct)}`);
    return deletedProduct;
  }
}
