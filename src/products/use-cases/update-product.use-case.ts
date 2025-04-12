import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Products } from '@prisma/client';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class UpdateProductUseCase {
  private readonly $logger = new Logger(UpdateProductUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(id: string, data: UpdateProductDto): Promise<Products> {
    this.$logger.log(`Finding product with id: ${id}`);
    const product = await this.$productsRepository.findById(id);
    this.$logger.log(
      `Product found: ${JSON.stringify(product)}, ready to update`,
    );

    if (!product) {
      this.$logger.error('Product not found');
      throw new NotFoundException('Product not found');
    }

    this.$logger.log(`Updating product with id: ${id}`);
    const updatedProduct = await this.$productsRepository.update(id, data);
    this.$logger.log(`Product updated: ${JSON.stringify(updatedProduct)}`);

    return updatedProduct;
  }
}
