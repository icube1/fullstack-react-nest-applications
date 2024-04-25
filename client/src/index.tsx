import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { ApplicationsProvider } from './components/AppContext/AppContext';
import { ThemeProvider } from '@gravity-ui/uikit';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <ThemeProvider>
        <ApplicationsProvider>
            <App />
        </ApplicationsProvider>,
    </ThemeProvider>
  );
