import { Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

@Injectable()
export class ClientsRepository {
  @Inject(PrismaService)
  private readonly $db: PrismaService;

  public async findAll(): Promise<Clients[]> {
    return this.$db.clients.findMany();
  }

  public async findById(id: string): Promise<Clients | null> {
    return this.$db.clients.findUnique({
      where: {
        id,
      },
    });
  }

  public async findByEmail(email: string): Promise<Clients | null> {
    return this.$db.clients.findUnique({
      where: {
        email,
      },
    });
  }

  public async create(data: CreateClientDto): Promise<Clients> {
    return await this.$db.clients.create({
      data,
    });
  }

  public async update(id: string, data: UpdateClientDto): Promise<Clients> {
    return this.$db.clients.update({
      where: {
        id,
      },
      data,
    });
  }

  public async delete(id: string): Promise<Clients> {
    return this.$db.clients.delete({
      where: {
        id,
      },
    });
  }
}
