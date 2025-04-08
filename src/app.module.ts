import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsController } from './clients/controllers/clients.controller';

@Module({
  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
