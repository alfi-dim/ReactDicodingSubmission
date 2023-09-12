import './global.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApps from './components/NoteApps.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApps />);