import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';
import { CreateClientDto } from '../dtos/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(data: CreateClientDto): Promise<Clients> {
    console.log(`Creating client with data: ${JSON.stringify(data)}`);
    await this.verifyEmail(data.email);
    const client = await this.clientsRepository.create(data);

    if (!client) {
      throw new BadRequestException('Client creation failed');
    }

    return client;
  }

  private async verifyEmail(email: string): Promise<void> {
    const client = await this.clientsRepository.findByEmail(email);
    if (client) {
      throw new BadRequestException('Email already exists');
    }
  }
}
