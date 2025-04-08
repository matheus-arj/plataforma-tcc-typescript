import { forwardRef, Module } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { ClientsController } from './controllers/clients.controller';
import { ClientsService } from './services/clients.service';
import { FindClientsUseCase } from './use-cases/find-clients.use-case';
import { AppModule } from 'src/app.module';
import { FindClientUseCase } from './use-cases/find-client.use-case';

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [
    ClientsService,
    ClientsController,
    ClientsRepository,
    FindClientsUseCase,
    FindClientUseCase,
  ],
  controllers: [ClientsController],
  exports: [ClientsRepository, FindClientsUseCase, FindClientUseCase],
})
export class ClientsModule {}
