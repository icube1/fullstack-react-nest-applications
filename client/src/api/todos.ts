import { Todo } from '../types/Todo';
import axios from "axios";

const BASE_URL = 'http://localhost:4000';



export const getTodos = async () => {
  try {
    const response = await axios.get<Todo[]>(`${BASE_URL}/todo`);
    return response.data;
  } catch (error) {
    throw new Error('Unable to load todos');
  }
};

export const createTodos = (
  {
    title,
    status,
  }: Omit<Todo, 'id'>,
) => {
  return axios.post<Todo>(`${BASE_URL}/todo`,
    {
      title,
      status,
    });
};

export const deleteTodoAxios = async (todoId: number) => {
  try {
    await axios.delete(`${BASE_URL}/todo/${todoId}`);
  } catch (error: any) {
    throw new Error('Unable to delete todo');
  }
};

export const editTodo = async (
  {
    id,
    title,
    status,
  }: Todo,
) => {
  return await axios.patch<Todo>(`${BASE_URL}/todo/${id}`, {
    title,
    status,
  });
};

