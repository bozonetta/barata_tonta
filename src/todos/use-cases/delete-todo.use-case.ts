import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
        private readonly deleteTodoUseCase: DeleteTodoUseCase,
        private readonly findTodoByIdUseCase: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
           this.logger.log('Deleting toDo... ')
           
           const todo = await this.findTodoByIdUseCase.findById(id)

           if (!todo) {
            throw new NotFoundException('ToDo not found')
           }

           await this.deleteTodoUseCase.execute(id)
           this.logger.log('ToDo deleted successfully' )
           return(todo)
        }  catch (error) {
           this.logger.error(error)
           throw error
        }
    }
}