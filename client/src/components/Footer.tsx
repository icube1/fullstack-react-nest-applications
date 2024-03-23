import React, { useContext } from 'react';
import classNames from 'classnames';
import { TodosContext } from '../TodoContext/TodoContext';
import { Status } from '../types/Status';
import { TodoStatus } from '../types/TodoStatus';

export const Footer: React.FC = () => {
  const {
    todos,
    deleteCompletedTodos,
    setQuery,
    query,
  } = useContext(TodosContext);

  const unCompletedTodos = todos.filter(({ status }) => status === TodoStatus.Process);

  const completedTodos = todos.filter(({ status }) => status === TodoStatus.Done);

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${unCompletedTodos.length} todos left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: query === Status.All,
          })}
          onClick={() => {
            setQuery(Status.All);
          }}
        >
          {Status.All}
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: query === Status.NotStarted,
          })}
          onClick={() => {
            setQuery(Status.NotStarted);
          }}
        >
          {Status.NotStarted}
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: query === Status.Process,
          })}
          onClick={() => {
            setQuery(Status.Process);
          }}
        >
          {Status.Process}
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: query === Status.Completed,
          })}
          onClick={() => {
            setQuery(Status.Completed);
          }}
        >
          {Status.Completed}
        </a>
      </nav>
      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={deleteCompletedTodos}
        disabled={!completedTodos.length}
      >
        Clear completed
      </button>
    </footer>
  );
};
