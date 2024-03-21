// import { Test, TestingModule } from '@nestjs/testing';
// import { NotFoundException } from '@nestjs/common';
// import { TodoController } from './app.controller';
// import { TodoService } from './app.service';
// import { Task } from './task.entity';

// describe('TodoController', () => {
//   let controller: TodoController;
//   let service: TodoService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [TodoController],
//       providers: [TodoService],
//     }).compile();

//     controller = module.get<TodoController>(TodoController);
//     service = module.get<TodoService>(TodoService);
//   });

//   it('should return all todos', async () => {
//     const todos: Task[] = [{ id: 1, title: 'Todo 1', completed: 'unprocessed' }];
//     jest.spyOn(service, 'getAllTodos').mockResolvedValue(todos);

//     expect(await controller.getAllTodos()).toEqual(todos);
//   });

//   it('should return a todo by id', async () => {
//     const todo: Task = { id: 1, title: 'Todo 1', completed: 'unprocessed' };
//     jest.spyOn(service, 'getTodoById').mockResolvedValue(todo);

//     expect(await controller.getTodoById(1)).toEqual(todo);
//   });

//   it('should update a todo', async () => {
//     const updatedTodo: Task = { id: 1, title: 'Updated Todo', completed: 'completed' };
//     jest.spyOn(service, 'updateTodo').mockResolvedValue(updatedTodo);

//     expect(await controller.updateTodo(1, updatedTodo)).toEqual(updatedTodo);
//   });

//   it('should delete a todo', async () => {
//     jest.spyOn(service, 'deleteTodo').mockResolvedValue(undefined);

//     await expect(controller.deleteTodo(1)).resolves.toBeUndefined();
//   });


//   it('should throw NotFoundException when getting todo by invalid id', async () => {
//     jest.spyOn(service, 'getTodoById').mockResolvedValue(undefined);

//     await expect(controller.getTodoById(999)).rejects.toThrowError(NotFoundException);
//   });

//   it('should throw NotFoundException when updating todo with invalid id', async () => {
//     jest.spyOn(service, 'updateTodo').mockResolvedValue(undefined);

//     await expect(controller.updateTodo(999, { id: 999, title: 'Updated Todo', completed: 'completed' })).rejects.toThrowError(NotFoundException);
//   });

//   it('should throw NotFoundException when deleting todo with invalid id', async () => {
//     jest.spyOn(service, 'deleteTodo').mockResolvedValue(undefined);

//     await expect(controller.deleteTodo(999)).rejects.toThrowError(NotFoundException);
//   });
// });