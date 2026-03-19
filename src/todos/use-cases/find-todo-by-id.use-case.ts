import { Injectable, Logger } from "@nestjs/common"
import { FindTodoByIdRepository } from "../repository"
import { CreateTodoDto } from "../dto/create-todo.dto"

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly findAllTodosRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

async execute(data: CreateTodoDto){
    try {
        this.logger.log('Procurando calango ...')

        const todo = await this.findAllTodosRepository.findById(id)
        this.logger.log('Calango encontrado com sucesso')
        return todo
    }   catch (error) {
        this.logger.error(error)
        throw new Error('Falha ao procurar calango')
    }
    }
}