import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';
import { UpdateClientDto } from '../dtos/update-client.dto';

@Injectable()
export class UpdateClientUseCase {
  private readonly logger = new Logger(UpdateClientUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string, data: UpdateClientDto): Promise<Clients> {
    await this.verifyClientIfExists(id);

    this.logger.log(`Updating client with id: ${id}`);
    const updatedUser = await this.clientsRepository.update(id, data);
    this.logger.log(`Client updated: ${JSON.stringify(updatedUser)}`);

    return updatedUser;
  }

  private async verifyClientIfExists(id: string): Promise<void> {
    this.logger.log(`Verifying if client with id: ${id} exists`);
    const client = await this.clientsRepository.findById(id);
    if (!client) {
      this.logger.error(`Client with id ${id} not found`);
      throw new NotFoundException(`Client with id ${id} not found`);
    }
  }
}
