import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class DeleteClientUseCase {
  private readonly logger = new Logger(DeleteClientUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string): Promise<Clients> {
    await this.verifyClientIfExists(id);

    this.logger.log(`Deleting client with id: ${id}`);
    const deletedClient = await this.clientsRepository.delete(id);
    this.logger.log(`Client deleted: ${JSON.stringify(deletedClient)}`);

    return deletedClient;
  }

  private async verifyClientIfExists(id: string): Promise<void> {
    this.logger.log(`Verifying if client with id: ${id} exists`);
    const client = await this.clientsRepository.findById(id);
    this.logger.log(`Client found: ${JSON.stringify(client)}`);

    if (!client) {
      this.logger.error(`Client with id ${id} not found`);
      throw new NotFoundException(`Client with id ${id} not found`);
    }
  }
}
