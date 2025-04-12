import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindProductUseCase } from './use-cases/find-product.use-case';
import { FindProductsUseCase } from './use-cases/find-products.use-case';

@Controller('products')
export class ProductsController {
  @Inject(FindProductsUseCase)
  private readonly $findProductsUseCase: FindProductsUseCase;
  @Inject(FindProductUseCase)
  private readonly $findProductUseCase: FindProductUseCase;

  @Get()
  findAll() {
    return this.$findProductsUseCase.execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.$findProductUseCase.execute(id);
  }
}
