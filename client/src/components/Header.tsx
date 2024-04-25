import React, { useContext, useRef, useState, useEffect } from 'react';
import { Button, TextInput, Select } from '@gravity-ui/uikit';
import { ApplicationsContext } from './AppContext/AppContext';

export const Header: React.FC = () => {
  const { addApplication, updateApplication, setErrorMessage, applications, editMode, setEditMode } = useContext(ApplicationsContext);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const initialFormData = {
    appName: '',
    status: 'new',
    clientCompanyName: '',
    carrierName: '',
    carrierPhone: '',
    comments: '',
    atiCode: '',
    disableInput: false
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editMode && selectedApplication) {
      setFormData(selectedApplication);
    } else {
      setFormData(initialFormData);
    }
  }, [editMode, selectedApplication]);

  const appNameFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (appNameFocus.current) {
      appNameFocus.current.focus();
    }
  }, [applications.length]);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.appName.trim() || !formData.clientCompanyName.trim() || !formData.carrierName.trim() || !formData.carrierPhone.trim()) {
      setErrorMessage('All fields are required');
      return;
    }

    const action = editMode ? addApplication : updateApplication;
    setFormData(prev => ({ ...prev, disableInput: true }));
    action(formData)
      .then(() => {
        setEditMode(false);
        setFormData(initialFormData);
      })
      .catch(() => {
        setErrorMessage(`Unable to ${editMode ? 'edit' : 'add'} application`);
      })
      .finally(() => {
        setFormData(prev => ({ ...prev, disableInput: false }));
      });
  };

  return (
    <header className="app-management__header">
      <form style={{backgroundColor: 'rgba(0,0,0,0.8)'}} onSubmit={handleOnSubmit}>
        <TextInput
          type="text"
          className="app-management__new-app"
          placeholder="Enter application name"
          ref={appNameFocus}
          value={formData.appName}
          disabled={formData.disableInput}
          onChange={handleChange('appName')}
        />
        {editMode && (
          <Select
            value={[formData.status]}
            label='Статус'
            onUpdate={(value)=>formData.status = value[0]}
            options={[
              { value: 'new', content: 'Новая' },
              { value: 'in progress', content: 'В процессе' },
              { value: 'finished', content: 'Завершена' }
            ]}
          />
        )}
        <TextInput type="text" placeholder="Client Company Name" value={formData.clientCompanyName} onChange={handleChange('clientCompanyName')} />
        <TextInput type="text" placeholder="Carrier Name" value={formData.carrierName} onChange={handleChange('carrierName')} />
        <TextInput type="text" placeholder="Carrier Phone" value={formData.carrierPhone} onChange={handleChange('carrierPhone')} />
        <TextInput type="text" placeholder="Comments" value={formData.comments} onChange={handleChange('comments')} />
        <TextInput type="text" placeholder="ATI Code" value={formData.atiCode} onChange={handleChange('atiCode')} />
        <Button type="submit" disabled={formData.disableInput}>{!editMode ? 'Add' : 'Update'} Application</Button>
      </form>
    </header>
  );
};