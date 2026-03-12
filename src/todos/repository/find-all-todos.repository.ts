import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class FindAllTodosRepository {
    constructor(private readonly prisma: PrismaService) {}

        async findAll() {
            return await this.prisma.todo.findMany()
        }
}