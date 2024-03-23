import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { TodosContext } from '../TodoContext/TodoContext';
import * as todosServices from '../api/todos';
import { TodoStatus } from '../types/TodoStatus';

export const Header: React.FC = () => {
  const {
    addTodo,
    onToggleAll,
    todos,
    setErrorMessage,
    setTempTodo,
    tempTodo,
  } = useContext(TodosContext);

  const [todoTitle, setTodoTitle] = useState('');
  const [disableInput, setDisableInput] = useState(false);

  const isAllTodosCompleted = todos.every(({ status }) => status === TodoStatus.Done);
  const isThereProcessingTodos = todos.some(({status}) => status === TodoStatus.Process || status === TodoStatus.Done)

  const handleToggleAll = () => {
    const filteredNotStartedTodos = todos.filter(todo => todo.status !== TodoStatus.Undone)
    onToggleAll(filteredNotStartedTodos);
  };

  const todoTitleFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (todoTitleFocus.current) {
      todoTitleFocus.current.focus();
    }
  }, [todos.length, tempTodo]);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoTitle.trim()) {
      setErrorMessage('Title should not be empty');
      setTodoTitle('');
    }

    if (!!todoTitle.trim()) {
      setDisableInput(true);
      setTempTodo({
        id: 0,
        title: todoTitle.trim(),
        status: TodoStatus.Undone,
      });

      todosServices.createTodos({
        title: todoTitle.trim(),
        status: TodoStatus.Undone,
      }).then(response => {
        setTodoTitle('');
        addTodo(response.data);
        setTempTodo(null);
      })
        .catch(() => {
          setErrorMessage('Unable to add a todo');
          setTempTodo(null);
        })
        .finally(() => {
          setDisableInput(false);
        });
    }
  };

  return (
    <header className="todoapp__header">

      {isThereProcessingTodos && (
        <button
          type="button"
          className={classNames('todoapp__toggle-all', {
            active: isAllTodosCompleted,
          })}
          onClick={handleToggleAll}
        />
      )}

      <form
        onSubmit={(event) => handleOnSubmit(event)}
      >
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          ref={todoTitleFocus}
          value={todoTitle}
          disabled={disableInput}
          onChange={(event) => setTodoTitle(event.currentTarget.value)}
        />
      </form>
    </header>
  );
};
