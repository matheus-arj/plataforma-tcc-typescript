import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientsRepository } from '../clients.repository';
import { UpdateClientDto } from '../dtos/update-client.dto';

@Injectable()
export class UpdateClientUseCase {
  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(id: string, data: UpdateClientDto) {
    await this.verifyClientIfExists(id);
    return await this.clientsRepository.update(id, data);
  }

  private async verifyClientIfExists(id: string): Promise<void> {
    const client = await this.clientsRepository.findById(id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
  }
}
