import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from './components/Error';
import { AppList } from './components/AppContext/AppList';
import { Button, Modal } from '@gravity-ui/uikit';
import { useApplications } from './components/AppContext/AppContext';
import { useState } from 'react';

const EditModeButton = () => {
  const { adminMode, toggleEditMode } = useApplications();

  return (
    <button onClick={toggleEditMode}>
      {adminMode ? 'Exit admin Mode' : 'Enter admin Mode'}
    </button>
  );
};

export default EditModeButton;

export const App: React.FC = () => {  
  const [open, setOpen] = useState(false);

  return (
    <div className="todoapp">
        <EditModeButton />
        <h1 className="todoapp__title">Заявки</h1>

        <div className="todoapp__content">
        <Button onClick={() => setOpen(true)}>Добавить заявку</Button>
        <Modal className='modal' open={open} onClose={() => setOpen(false)}>
            <Header />
        </Modal>

        <AppList openModal={setOpen} />

      </div>

      <Error />
    </div>
  );
};
