import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class DeleteTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string) {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }
}