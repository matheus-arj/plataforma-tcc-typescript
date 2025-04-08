import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateClientDto } from '../dtos/create-client.dto';
import { CreateClientUseCase } from '../use-cases/create-client.use-case';
import { FindClientUseCase } from '../use-cases/find-client.use-case';
import { FindClientsUseCase } from '../use-cases/find-clients.use-case';

@Controller('clients')
export class ClientsController {
  @Inject(FindClientsUseCase)
  private readonly findClientsUseCase: FindClientsUseCase;
  @Inject(FindClientUseCase)
  private readonly findClientUseCase: FindClientUseCase;
  @Inject(CreateClientUseCase)
  private readonly createClientUseCase: CreateClientUseCase;

  @Get()
  public async findAll() {
    return this.findClientsUseCase.execute();
  }

  @Get(':id')
  public async findById(@Param('id') id: string) {
    return this.findClientUseCase.execute(id);
  }

  @Post()
  public async create(@Body() data: CreateClientDto) {
    return await this.createClientUseCase.execute(data);
  }
}
