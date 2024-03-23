import React, { useContext } from 'react';

import { TodoItem } from './TodoItem';
import { TodosContext } from '../TodoContext/TodoContext';

export const TodoList: React.FC = () => {
  const { filteredTodos, tempTodo, errorMessage } = useContext(TodosContext);

  return (
    <section className="todoapp__main">
      {filteredTodos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      {!!tempTodo && !errorMessage && (
        <div className="todo">
          <label className="todo__status-label">
            <input
              type="checkbox"
              className="todo__status"
            />
          </label>

          <span className="todo__title">
            {tempTodo.title}
          </span>

          <button type="button" className="todo__remove">
            ×
          </button>

          <div
            className="modal overlay is-active"
          >
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      )}
    </section>

  );
};
