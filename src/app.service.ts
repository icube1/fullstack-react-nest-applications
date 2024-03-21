import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) { }

  async getAllTodos(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTodoById(id: number): Promise<Task> {
    const todo = await this.taskRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  async createTodo(taskData: Partial<Task>): Promise<Task> {
    const newTodo = this.taskRepository.create(taskData);
    return await this.taskRepository.save(newTodo);
  }

  async deleteTodo(id: number): Promise<Task> {
    const todoToDelete = await this.taskRepository.findOne({ where: { id } });
    if (!todoToDelete) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const deletedTodo = await this.taskRepository.remove(todoToDelete);
    return deletedTodo;
  }

}