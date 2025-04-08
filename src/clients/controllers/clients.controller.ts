import { Controller, Get, Inject } from '@nestjs/common';
import { FindClientsUseCase } from '../use-cases/find-clients.use-case';

@Controller('clients')
export class ClientsController {
  @Inject(FindClientsUseCase)
  private readonly findClientsUseCase: FindClientsUseCase;

  @Get()
  public async findAll() {
    return this.findClientsUseCase.execute();
  }
}
