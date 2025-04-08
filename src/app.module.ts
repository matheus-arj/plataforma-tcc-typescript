import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsController } from './clients/controllers/clients.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService, PrismaService],
  exports: [AppService, PrismaService],
})
export class AppModule {}
