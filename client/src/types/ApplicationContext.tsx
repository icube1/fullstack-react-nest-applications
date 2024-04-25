import { Application } from './Application';

export interface ApplicationsState {
    hasError: any;
    applications: Application[];
    setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
    addApplication: (application: Application) => Promise<Application>;
    deleteApplication: (id: number) => Promise<void>;
    updateApplication: (id: number) => Promise<Application>;
    setErrorMessage: (message: string) => void;
    errorMessage: string;
    adminMode: boolean;
    setAdminMode: () => void;
    selectedApplication: Application | null;
    setSelectedApplication: React.Dispatch<React.SetStateAction<void>>;
    editMode: boolean;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
