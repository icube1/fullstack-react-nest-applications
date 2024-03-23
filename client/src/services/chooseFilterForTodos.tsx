import { Status } from '../types/Status';
import { Todo } from '../types/Todo';

export function filterForTodos(queryForFilter: string, todos: Todo[]) {
  return todos.filter(todo => {
    switch (queryForFilter) {
      case Status.NotStarted:
        return todo.status === "undone";

      case Status.Process:
        return todo.status === "process";

      case Status.Completed:
        return todo.status === "done";

      default:
        return true;
    }
  });
}
