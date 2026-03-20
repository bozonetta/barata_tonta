import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdateTodoDto)
        try {
            this.logger.log('Atualizando calangos...')
            const todo = await this.findTodoByIdRepository.update(id)

            if(!todo) {
                throw new NotFoundException('Calango não encontrado')
            }

            await this.updateTodoRepository.update(id, data)
            return(todo)
        } catch (error) {
            this.logger.error(error)
            throw error
        }
}
