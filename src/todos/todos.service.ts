import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoUseCase, DeleteTodoUseCase, UpdateTodoUseCase } from './use-cases';
import { FindAllTodosRepository, FindTodoByIdRepository } from './repository';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
    private readonly findTodoByIdUseCase: FindTodoByIdRepository,
    private readonly findAllTodosUseCase: FindAllTodosRepository,
    private readonly updateTodoUseCase: UpdateTodoUseCase,
  ) {}
  
  async create(data: CreateTodoDto) {
    return await this.createTodoUseCase.create(data)
  }

  async findAll() {
    return await this.findAllTodosUseCase.findAll()
  }

  async FindById(id: string) {
    return await this.findTodoByIdUseCase.findById(id)
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updateTodoUseCase.update(id, data)
  }

 async execute(id: string) {
    return await this.deleteTodoUseCase.execute(id)

  }
}
