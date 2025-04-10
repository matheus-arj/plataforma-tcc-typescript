import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';

import { FindProductsUseCase } from './use-cases/find-products.use-case';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [ProductsController],
  providers: [ProductsRepository, FindProductsUseCase],
  exports: [ProductsRepository, FindProductsUseCase],
})
export class ProductsModule {}
