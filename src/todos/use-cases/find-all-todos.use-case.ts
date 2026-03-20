import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindAllTodosRepository } from '../repository';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly findAllTodosRepository: FindAllTodosRepository,
        private readonly logger: Logger,
    ) {}

async execute(data: CreateTodoDto){
    try {
        this.logger.log('Procurando calangos ...')
        const todo = await this.findAllTodosRepository.findAll()
        this.logger.log('Calangos encontrados com sucesso')
        if (!todo) {
            throw new NotFoundException('Nenhum calango encontado')
        }
        return todo
    }   catch (error) {
        this.logger.error(error)
        throw new Error('Falha ao procurar calangos')
    }
    }
}