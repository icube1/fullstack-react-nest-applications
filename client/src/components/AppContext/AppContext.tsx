import { createContext, useState, useCallback, useContext, useEffect } from "react";
import { Application } from "../../types/Application";
import { ApplicationsState } from "../../types/ApplicationContext";
import { getApps, createApp, deleteApp, editApp } from '../../api/apps';

const initialState: Partial<ApplicationsState> = {
  applications: []
};

export const ApplicationsContext = createContext<ApplicationsState>(initialState);

export const ApplicationsProvider = ({ children }: any) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const apps = await getApps();
        setApplications(apps);
        setHasError(false);
      } catch (error) {
        setErrorMessage('Unable to load applications');
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const toggleEditMode = (application?: Application) => {
    setAdminMode(!adminMode);
    setSelectedApplication(application || null);
  };

  const updateApplication = async (application: Application) => {
    setLoading(true);
    try {
      const updatedApp = await editApp(application);
    //   @ts-expect-error
      setApplications(current => current.map(app => app.id === updatedApp.id ? updatedApp : app));
      setHasError(false);
      toggleEditMode();
    } catch (error) {
      setErrorMessage('Unable to update application');
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const addApplication = useCallback(async (application: Omit<Application, 'id' | 'receivedDate'>): Promise<void> => {
    setLoading(true);
    try {
      const newApp = await createApp(application);
      setApplications(prev => [...prev, newApp]);
      setHasError(false);
    } catch (error) {
      setErrorMessage('Unable to add application');
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteApplication = async (id: number) => {
    setLoading(true);
    try {
      await deleteApp(id);
      setApplications(current => current.filter(app => app.id !== id));
      setHasError(false);
    } catch (error) {
      setErrorMessage('Unable to delete application');
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    applications,
    setApplications,
    addApplication,
    deleteApplication,
    updateApplication,
    setErrorMessage,
    errorMessage,
    hasError,
    loading,
    adminMode,
    toggleEditMode,
    selectedApplication,
    setSelectedApplication, 
    editMode, 
    setEditMode
  };

  return (
    <ApplicationsContext.Provider value={value}>
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useApplications = () => useContext(ApplicationsContext);
export const useErrorStatus = () => {
  const context = useContext(ApplicationsContext);
  return context.hasError;
};