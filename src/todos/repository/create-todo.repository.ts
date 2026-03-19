import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateTodoDto) {
        return await this.prisma.todo.create({ data })
    }
}