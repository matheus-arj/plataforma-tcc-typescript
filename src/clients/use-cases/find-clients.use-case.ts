import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class FindClientsUseCase {
  private readonly logger = new Logger(FindClientsUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute() {
    this.logger.log('Finding all clients');
    return this.clientsRepository.findAll();
  }
}
