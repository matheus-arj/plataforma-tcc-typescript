import { Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';
import { CreateClientDto } from '../dtos/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(data: CreateClientDto): Promise<Clients> {
    console.log(`Creating client with data: ${JSON.stringify(data)}`);
    const client = await this.clientsRepository.create(data);

    if (!client) {
      throw new Error('Client creation failed');
    }

    return client;
  }
}
