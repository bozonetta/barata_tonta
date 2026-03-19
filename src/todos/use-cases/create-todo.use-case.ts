import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoRepository } from '../repository';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository,
        private readonly logger: Logger,
    ) {}

async execute(data: CreateTodoDto){
    try {
        this.logger.log('Criando calangos ...')
        const todo = await this.createTodoRepository.create(data)
        this.logger.log('Calangos criados com sucesso')
        return todo
    }   catch (error) { //<- o erro é pego aqui
        this.logger.error(error)
        throw new Error('Falha ao criar calangos')
    }
    }
}