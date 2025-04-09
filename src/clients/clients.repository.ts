import { Inject, Injectable } from '@nestjs/common';
import { Clients } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

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

  public async findByEmail(email: string) {
    return this.$db.clients.findUnique({
      where: {
        email,
      },
    });
  }

  public async create(data: CreateClientDto): Promise<Clients | null> {
    try {
      return await this.$db.clients.create({
        data,
      });
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  public async update(
    id: string,
    data: UpdateClientDto,
  ): Promise<Clients | null> {
    try {
      return this.$db.clients.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
