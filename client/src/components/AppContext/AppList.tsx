import React, { useContext } from 'react';
import { ApplicationsContext, useApplications } from './AppContext';
import { Link, Table, withTableActions, withTableSorting } from '@gravity-ui/uikit';

export const AppList: React.FC = ({ openModal }: any) => {
  const { applications, errorMessage, hasError } = useApplications();
  const { deleteApplication, adminMode, setSelectedApplication, setEditMode, editMode } = useContext(ApplicationsContext);

  if (hasError) {
    return <div>Error: {errorMessage}</div>;
  }

  const MyTable = withTableActions(withTableSorting(Table));

  const columns = [
    { class: 'padding', id: 'clientCompanyName', name: 'Company', meta: { sort: true } },
    { class: 'padding', id: 'carrierName', name: 'Carrier', meta: { sort: true } },
    { class: 'padding', id: 'carrierPhone', name: 'Phone', meta: { sort: true } },
    { class: 'padding', id: 'comments', name: 'Comments', meta: { sort: true } },
    { class: 'padding', id: 'status', name: 'Status', meta: { sort: true } },
    { class: 'padding', id: 'atiCode', name: 'ATI Code', format: (value: string) => <Link href={`https://ati.su/firms/${value}/info`} target="_blank" rel="noreferrer">{value}</Link>, meta: { sort: true } }
  ];

  const getRowActions = (application: any) => {
    return adminMode ? [
      { 
        text: 'Edit', 
        handler: () => {
          setSelectedApplication(application);
          setEditMode(true);
          openModal(true);
        }
      },
      { 
        text: 'Delete', 
        handler: () => deleteApplication(application.id), 
        theme: 'danger' 
      },
    ] : [];
  };

  return (
    <section className="" style={{ display: 'flex', gap: 20 }}>
      {/* @ts-expect-error */}
      <MyTable rowActionsSize='m' edgePadding={true} data={applications} columns={columns} getRowActions={getRowActions} />
    </section>
  );
};