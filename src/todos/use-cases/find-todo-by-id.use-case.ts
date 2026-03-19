import { Injectable, Logger, NotFoundException } from "@nestjs/common"
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
        
        if (!todo) {
            throw new NotFoundException('Calango não encontrado')
        }

        this.logger.log('ToDo found successfully')
        return todo
    }   catch (error) {
        this.logger.error(error)
        throw error
    }
    }
}