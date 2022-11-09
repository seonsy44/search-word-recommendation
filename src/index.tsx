import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { colors } from './styles/theme';
import App from './App';
import { CacheProvider } from './context/CacheContext';
import { DiseaseSearchProvider } from './context/DiseaseSearchContext';
import { DiseaseSearchService } from './service/DiseaseSearchService';
import getAxiosInstance from './http/axiosInstance';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const axiosInstance = getAxiosInstance(`http://${window.location.hostname}:4000/`);
const diseaseSearchService = DiseaseSearchService(axiosInstance);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={colors}>
      <CacheProvider>
        <DiseaseSearchProvider DiseaseSearchService={diseaseSearchService}>
          <App />
        </DiseaseSearchProvider>
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>
);
