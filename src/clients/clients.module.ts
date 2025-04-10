import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { CreateClientUseCase } from './use-cases/create-client.use-case';
import { DeleteClientUseCase } from './use-cases/delete-client.use-case';
import { FindClientUseCase } from './use-cases/find-client.use-case';
import { FindClientsUseCase } from './use-cases/find-clients.use-case';
import { UpdateClientUseCase } from './use-cases/update-client.use-case';

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [
    ClientsController,
    ClientsRepository,
    FindClientsUseCase,
    FindClientUseCase,
    CreateClientUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
  ],
  controllers: [ClientsController],
  exports: [
    ClientsRepository,
    FindClientsUseCase,
    FindClientUseCase,
    CreateClientUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
  ],
})
export class ClientsModule {}
