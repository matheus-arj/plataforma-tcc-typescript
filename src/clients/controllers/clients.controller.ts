import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FindClientsUseCase } from '../use-cases/find-clients.use-case';
import { FindClientUseCase } from '../use-cases/find-client.use-case';

@Controller('clients')
export class ClientsController {
  @Inject(FindClientsUseCase)
  private readonly findClientsUseCase: FindClientsUseCase;
  @Inject(FindClientUseCase)
  private readonly findClientUseCase: FindClientUseCase;

  @Get()
  public async findAll() {
    return this.findClientsUseCase.execute();
  }

  @Get(':id')
  public async findById(@Param('id') id: string) {
    return this.findClientUseCase.execute(id);
  }
}
