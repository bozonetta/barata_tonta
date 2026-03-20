import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import * as UseCases from './use-cases/index';
import * as Repositories from './repository';
import { PrismaService } from 'src/shared/database/prisma.database';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({ // Módulo é o cérebro dessa bosta
  controllers: [TodosController],
  providers: [
    TodosService,
    PrismaService,
    Logger,
    ...repositories,
    ...useCases,
  ],
})
export class TodosModule {}
