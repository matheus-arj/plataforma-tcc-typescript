import { Module } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { FindClientsUseCase } from './use-cases/find-clients.use-case';

@Module({
  // imports: [PrismaModule],
  providers: [
    ClientsService,
    ClientsController,
    ClientsRepository,
    FindClientsUseCase,
  ],
  controllers: [ClientsController],
})
export class ClientsModule {}
