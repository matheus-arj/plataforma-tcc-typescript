import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class FindClientUseCase {
  private readonly logger = new Logger(FindClientUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string): Promise<Clients> {
    this.logger.log(`Finding client with id: ${id}`);
    const client = await this.clientsRepository.findById(id);

    if (!client) {
      this.logger.error(`Client with id ${id} not found`);
      throw new NotFoundException(`Client with id ${id} not found`);
    }

    this.logger.log(`Client found: ${JSON.stringify(client)}`);
    return client;
  }
}
