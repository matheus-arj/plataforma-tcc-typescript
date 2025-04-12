import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Products } from '@prisma/client';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsRepository } from '../products.repository';

@Injectable()
export class CreateProductUseCase {
  private readonly $logger = new Logger(CreateProductUseCase.name);

  @Inject(ProductsRepository)
  private readonly $productsRepository: ProductsRepository;

  public async execute(data: CreateProductDto): Promise<Products> {
    this.$logger.log(`Creating product with data: ${JSON.stringify(data)}`);
    const product = await this.$productsRepository.create(data);

    if (!product) {
      this.$logger.error('Product creation failed');
      throw new BadRequestException('Product creation failed');
    }

    this.$logger.log(`Product created with id: ${product.id}`);
    return product;
  }
}
