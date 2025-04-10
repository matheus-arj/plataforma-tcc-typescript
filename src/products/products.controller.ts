import { Controller, Get, Inject } from '@nestjs/common';
import { FindProductsUseCase } from './use-cases/find-products.use-case';

@Controller('products')
export class ProductsController {
  @Inject(FindProductsUseCase)
  private readonly $findProductsUseCase: FindProductsUseCase;

  @Get()
  findAll() {
    return this.$findProductsUseCase.execute();
  }
}
