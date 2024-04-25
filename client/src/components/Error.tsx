import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import {Button} from '@gravity-ui/uikit';
import { ApplicationsContext } from './AppContext/AppContext';

export const Error: React.FC = () => {
  const {
    errorMessage,
    setErrorMessage,
  } = useContext(ApplicationsContext);

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
      <Button
        type="button"
        className="delete"
        onClick={() => setErrorMessage('')}
      />
      {errorMessage}
    </div>
  );
};
