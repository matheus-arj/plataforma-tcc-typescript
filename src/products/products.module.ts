import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { FindProductUseCase } from './use-cases/find-product.use-case';
import { FindProductsUseCase } from './use-cases/find-products.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';
@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [ProductsController],
  providers: [
    ProductsRepository,
    FindProductsUseCase,
    FindProductUseCase,
    CreateProductUseCase,
    UpdateProductUseCase,
  ],
  exports: [
    ProductsRepository,
    FindProductsUseCase,
    FindProductUseCase,
    CreateProductUseCase,
    UpdateProductUseCase,
  ],
})
export class ProductsModule {}
