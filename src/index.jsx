import './global.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {createRoot} from 'react-dom/client';
import NoteApps from './components/NoteApps.jsx';
import {BrowserRouter} from 'react-router-dom';
import {AppProvider} from './contexts/index.jsx';
import {Toaster} from 'react-hot-toast';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/ReactDicodingSubmission">
    <AppProvider>
      <NoteApps/>
      <Toaster/>
    </AppProvider>
  </BrowserRouter>
);