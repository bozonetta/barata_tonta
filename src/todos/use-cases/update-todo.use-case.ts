import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../repository";

@Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}
}