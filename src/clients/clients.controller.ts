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
import { Clients } from '@prisma/client';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';
import { CreateClientUseCase } from './use-cases/create-client.use-case';
import { DeleteClientUseCase } from './use-cases/delete-client.use-case';
import { FindClientUseCase } from './use-cases/find-client.use-case';
import { FindClientsUseCase } from './use-cases/find-clients.use-case';
import { UpdateClientUseCase } from './use-cases/update-client.use-case';

@Controller('clients')
export class ClientsController {
  @Inject(FindClientsUseCase)
  private readonly findClientsUseCase: FindClientsUseCase;
  @Inject(FindClientUseCase)
  private readonly findClientUseCase: FindClientUseCase;
  @Inject(CreateClientUseCase)
  private readonly createClientUseCase: CreateClientUseCase;
  @Inject(UpdateClientUseCase)
  private readonly updateClientUseCase: UpdateClientUseCase;
  @Inject(DeleteClientUseCase)
  private readonly deleteClientUseCase: DeleteClientUseCase;

  @Get()
  public async findAll(): Promise<Clients[]> {
    return this.findClientsUseCase.execute();
  }

  @Get(':id')
  public async findById(@Param('id') id: string): Promise<Clients> {
    return this.findClientUseCase.execute(id);
  }

  @Post()
  public async create(@Body() data: CreateClientDto): Promise<Clients> {
    return await this.createClientUseCase.execute(data);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() data: UpdateClientDto,
  ): Promise<Clients> {
    return await this.updateClientUseCase.execute(id, data);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<Clients> {
    return await this.deleteClientUseCase.execute(id);
  }
}
