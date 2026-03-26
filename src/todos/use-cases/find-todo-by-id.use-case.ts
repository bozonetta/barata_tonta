import { Injectable, Logger, NotFoundException } from "@nestjs/common"
import { FindTodoByIdRepository } from "../repository"
import { CreateTodoDto } from "../dto/create-todo.dto"

@Injectable()
export class FindByIdTodoUseCase {
    constructor(
        private readonly findTodoByIdUseCase: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

async FindById(id: string) {
        try {
            this.logger.log('Procurando calango ...')

            const todo = await this.findTodoByIdUseCase.findById(id)
        
            if (!todo) {
                throw new NotFoundException('Calango não encontrado')
            }

            this.logger.log('Calango encontrado com sucesso')
            return todo
        }   catch (error) {
            this.logger.error(error)
            throw error
    }
    }
}