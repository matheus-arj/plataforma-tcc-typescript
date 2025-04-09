import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Clients } from '@prisma/client';
import { ClientsRepository } from '../clients.repository';
import { CreateClientDto } from '../dtos/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  private readonly logger = new Logger(CreateClientUseCase.name);

  @Inject(ClientsRepository)
  private readonly clientsRepository: ClientsRepository;

  public async execute(data: CreateClientDto): Promise<Clients> {
    this.logger.log(`Creating client with data: ${JSON.stringify(data)}`);
    await this.verifyEmail(data.email);
    const client = await this.clientsRepository.create(data);

    if (!client) {
      this.logger.error('Client creation failed');
      throw new BadRequestException('Client creation failed');
    }

    this.logger.log(`Client created successfully: ${JSON.stringify(client)}`);
    return client;
  }

  private async verifyEmail(email: string): Promise<void> {
    this.logger.log(`Verifying email: ${email}, if exists`);
    const client = await this.clientsRepository.findByEmail(email);
    this.logger.log(`Client not exist, ready to create`);
    if (client) {
      this.logger.error('Email already exists');
      throw new BadRequestException('Email already exists');
    }
  }
}
