import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { TodosContext } from '../TodoContext/TodoContext';

export const Error: React.FC = () => {
  const {
    errorMessage,
    setErrorMessage,
  } = useContext(TodosContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setErrorMessage('');
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [errorMessage, setErrorMessage]);

  return (
    <div
      className={
        classNames('notification is-danger is-light has-text-weight-normal',
          { hidden: !errorMessage })
      }
    >
      <button
        type="button"
        className="delete"
        onClick={() => setErrorMessage('')}
      />
      {errorMessage}
    </div>
  );
};
