import { Inject, Injectable } from '@nestjs/common';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class FindClientsUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute() {
    return this.clientsRepository.findAll();
  }
}
