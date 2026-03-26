import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() data: CreateTodoDto) {
    return this.todosService.create(data);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todosService.FindById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTodoDto) {
    return this.todosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.execute(id);
  }
}
