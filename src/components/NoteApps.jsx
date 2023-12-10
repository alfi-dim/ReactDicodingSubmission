// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ArchivePage from '../pages/ArchivePage.jsx';
import Navigations from './Navigations.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import AddPage from '../pages/AddPage.jsx';
import Footer from './Footer.jsx';
import NotFoundPage from '../pages/404Page.jsx';

export default function NoteApps() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigations/>
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/archive" element={<ArchivePage/>}/>
          <Route path="/add" element={<AddPage/>}/>
          <Route path="/note/:id" element={<DetailPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
