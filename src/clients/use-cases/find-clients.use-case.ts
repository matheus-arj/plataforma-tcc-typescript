import { Inject, Injectable, Logger } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class FindClientsUseCase {
  private readonly logger = new Logger(FindClientsUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(): Promise<Clients[]> {
    this.logger.log('Finding all clients');
    return this.clientsRepository.findAll();
  }
}
