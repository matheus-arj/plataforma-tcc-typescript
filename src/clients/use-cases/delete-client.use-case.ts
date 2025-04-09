import { Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';

@Injectable()
export class DeleteClientUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string): Promise<Clients> {
    return await this.clientsRepository.delete(id);
  }
}
