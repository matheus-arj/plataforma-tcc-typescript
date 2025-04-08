/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientsRepository {
  @Inject(PrismaService)
  private readonly $db: PrismaService;

  public async findAll() {
    return this.$db.clients.findMany();
  }

  public async findById(id: string) {
    return this.$db.clients.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(data: any): Promise<Clients> {
    return this.$db.clients.create({
      data,
    });
  }
}
