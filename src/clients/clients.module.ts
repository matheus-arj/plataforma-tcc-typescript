import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { ClientsRepository } from './clients.repository';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { CreateClientUseCase } from './use-cases/create-client.use-case';
import { FindClientUseCase } from './use-cases/find-client.use-case';
import { FindClientsUseCase } from './use-cases/find-clients.use-case';
import { UpdateClientUseCase } from './use-cases/update-client.use-case';

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [
    ClientsService,
    ClientsController,
    ClientsRepository,
    FindClientsUseCase,
    FindClientUseCase,
    CreateClientUseCase,
    UpdateClientUseCase,
  ],
  controllers: [ClientsController],
  exports: [
    ClientsRepository,
    FindClientsUseCase,
    FindClientUseCase,
    CreateClientUseCase,
    UpdateClientUseCase,
  ],
})
export class ClientsModule {}
