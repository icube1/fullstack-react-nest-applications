import React, { useEffect, useMemo, useState } from 'react';
import { filterForTodos } from '../services/chooseFilterForTodos';
import { getTodos } from '../api/todos';
import { Todo } from '../types/Todo';
import { TodoContext } from '../types/TodoContext';
import * as todosServices from '../api/todos';
import { Status } from '../types/Status';
import { TodoStatus } from '../types/TodoStatus';

export const TodosContext = React.createContext<TodoContext>({
  todos: [],
  addTodo: () => { },
  setCompleted: () => { },
  onToggleAll: () => { },
  query: Status.All,
  setQuery: () => { },
  filteredTodos: [],
  deleteCompletedTodos: () => { },
  deleteTodo: async () => { },
  errorMessage: '',
  setErrorMessage: () => { },
  tempTodo: null,
  setTempTodo: () => { },
  updateTodosId: [],
  setUpdateTodosId: () => { },
  setTodos: () => { },
  setStatus: () => { }
});

interface Props {
  children: React.ReactNode;
}

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState(Status.All);
  const [errorMessage, setErrorMessage] = useState('');
  const [tempTodo, setTempTodo] = useState<Todo | null>(null);
  const [updateTodosId, setUpdateTodosId] = useState<number[]>([]);

  useEffect(() => {
    getTodos()
    .then(response => {
      setTodos(response);
    })
      .catch(() => {
        setErrorMessage('Unable to load todos');
      });
  }, []);

  function addTodo(todo: Todo) {
    if (todo.title.trim().length) {
      setTodos(prevTodos => [
        ...prevTodos,
        todo,
      ]);
    }
  }

  function updateTodo(updatedTodo: Todo) {
    setUpdateTodosId(prevId => [...prevId, updatedTodo.id]);
    todosServices
      .editTodo(updatedTodo)
      .then(response => {
        setTodos(currentTodos => currentTodos.map(todo =>
          todo.id === response.data.id ? response.data : todo
        ));
      })
      .catch(() => {
        setErrorMessage('Unable to update todo');
      })
      .finally(() => setUpdateTodosId([]));
  }

  function setCompleted(todoForEdit: Todo) {
    const updatedTodo = { ...todoForEdit, status: todoForEdit.status === TodoStatus.Done 
      ? TodoStatus.Process
      : TodoStatus.Done
    };

    updateTodo(updatedTodo);
  }

  function setStatus(todoForEdit: Todo) {
    const updatedTodo = { ...todoForEdit, status: TodoStatus.Process };

    updateTodo(updatedTodo);
  }

  const filteredTodos = filterForTodos(query, todos);

  function onToggleAll(filteredNotStartedTodos: Todo[]) {
    const areAllCompleted = filteredNotStartedTodos.every(todo => todo.status === TodoStatus.Done);

    setUpdateTodosId(() => {
      if (areAllCompleted) {
        return todos.map(todo => todo.id);
      }

      const signedTodos = filteredNotStartedTodos.filter(todo => todo.status === TodoStatus.Process);

      return signedTodos.map(todo => todo.id);
    });

    const toggledTodos = areAllCompleted
      ? [...filteredNotStartedTodos]
      : filteredNotStartedTodos.filter(todo => todo.status === TodoStatus.Process);

    const todosForEach = toggledTodos.map(todo => {
      return areAllCompleted
        ? { ...todo, status: TodoStatus.Process }
        : { ...todo, status: TodoStatus.Done };
    });

    todosForEach.forEach(
      updatedTodo => todosServices.editTodo(updatedTodo)
        .then(() => setTodos(currentTodos => currentTodos.map(
          (todo: Todo) => todo.id === updatedTodo.id
            ? updatedTodo
            : todo,
        )))
        .catch(() => setErrorMessage('Unable to update a todo'))
        .finally(() => setUpdateTodosId([])),
    );
  }

  async function deleteCompletedTodos() {
    const filterTodos = todos.filter(({ status }) => status === TodoStatus.Done);

    setUpdateTodosId(filterTodos.map(todo => todo.id));

    const promises = filterTodos.map(({ id }) => {
      todosServices.deleteTodoAxios(id)
        .then(() => {
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        })
        .catch(() => {
          setErrorMessage('Unable to delete a todo');
          throw new Error('Unable to delete a todo');
        });
    });

    try {
      await Promise.all(promises);
    } finally {
      setUpdateTodosId([]);
    }
  }

  function deleteTodo(todoID: number) {
    setUpdateTodosId(prevNumbers => [...prevNumbers, todoID]);
  
    return todosServices.deleteTodoAxios(todoID)
      .then(() => setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoID)))
      .catch(() => {
        setErrorMessage('Unable to delete a todo');
        throw new Error('Unable to delete a todo');
      })
      .finally(() => setUpdateTodosId([]));
  }

  const value = useMemo(() => ({
    todos,
    addTodo,
    setCompleted,
    onToggleAll,
    query,
    setQuery,
    filteredTodos,
    deleteCompletedTodos,
    deleteTodo,
    errorMessage,
    setErrorMessage,
    tempTodo,
    setTempTodo,
    updateTodosId,
    setUpdateTodosId,
    setTodos,
    setStatus,
  }), [todos, filteredTodos, query, errorMessage]);

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
};
