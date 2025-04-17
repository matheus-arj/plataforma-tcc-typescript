import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { FindProductUseCase } from './use-cases/find-product.use-case';
import { FindProductsUseCase } from './use-cases/find-products.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';

@Controller('products')
export class ProductsController {
  @Inject(FindProductsUseCase)
  private readonly $findProductsUseCase: FindProductsUseCase;
  @Inject(FindProductUseCase)
  private readonly $findProductUseCase: FindProductUseCase;
  @Inject(CreateProductUseCase)
  private readonly $createProductUseCase: CreateProductUseCase;
  @Inject(UpdateProductUseCase)
  private readonly $updateProductUseCase: UpdateProductUseCase;
  @Inject(DeleteProductUseCase)
  private readonly $deleteProductUseCase: DeleteProductUseCase;

  @Get()
  findAll() {
    return this.$findProductsUseCase.execute();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Products> {
    return this.$findProductUseCase.execute(id);
  }

  @Post()
  create(@Body() data: CreateProductDto): Promise<Products> {
    return this.$createProductUseCase.execute(data);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<Products> {
    return this.$updateProductUseCase.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Products> {
    return this.$deleteProductUseCase.execute(id);
  }
}
