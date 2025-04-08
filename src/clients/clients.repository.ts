import { Inject, Injectable } from '@nestjs/common';
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
}
