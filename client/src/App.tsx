import React, { useContext } from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { TodosContext } from './TodoContext/TodoContext';
import { Error } from './components/Error';

export const App: React.FC = () => {
  const {
    todos,
  } = useContext(TodosContext);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        <TodoList />

        {!!todos.length && (<Footer />)}
      </div>

      <Error />
    </div>
  );
};
