import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { proxyStore } from '../app/proxyStore';
import Popup from './Popup';
import '@mantine/core/styles.css';
import { MantineProvider,createTheme } from '@mantine/core';

proxyStore.ready().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={proxyStore}>
        <MantineProvider><Popup /></MantineProvider>
      </Provider>
    </React.StrictMode>
  );
});
