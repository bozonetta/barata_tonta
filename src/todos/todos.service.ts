import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoRepository, DeleteTodoRepository, FindAllTodosRepository, FindTodoByIdRepository, UpdateTodoRepository } from './repository';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoRepository: CreateTodoRepository,
    private readonly deleteTodoRepository: DeleteTodoRepository,
    private readonly findTodoByIdRepository: FindTodoByIdRepository,
    private readonly findAllTodosRepository: FindAllTodosRepository,
    private readonly updateTodoRepository: UpdateTodoRepository,
  ) {}
  
  async create(data: CreateTodoDto) {
    return await this.createTodoRepository.create(data)
  }

  async findAll(data: CreateTodoDto) {
    return await this.findAllTodosRepository.findAll()
  }

  async FindById(id: string) {
    return await this.findTodoByIdRepository.findById(id)
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updateTodoRepository.update(id, data)
  }

 async execute(id: string) {
    return await this.deleteTodoRepository.delete(id)

  }
}
