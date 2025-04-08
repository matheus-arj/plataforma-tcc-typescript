import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class FindClientUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string) {
    console.log(`Finding client with id: ${id}`);

    const client = await this.clientsRepository.findById(id);

    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }

    return client;
  }
}
