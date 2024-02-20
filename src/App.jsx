import React, { useEffect } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import NavbarFlowbite from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateThread from './pages/CreateThread';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/Login';
import Auth from './pages/Auth';
import RegisterPage from './pages/Register';
import { asyncPreloadProcess } from './states/isPreload/action';
import DetailThreadPage from './pages/DetailThread';
import LeaderboardsPage from './pages/Leaderboards';
import AboutPage from './pages/About';

function App() {
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <LoadingBar style={{ backgroundColor: '#0e7490' }} />
      <NavbarFlowbite authUser={authUser} />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="thread/new" element={<CreateThread />} />
          <Route path="thread/:id" element={<DetailThreadPage />} />
        </Route>
        <Route path="/auth" element={!authUser ? <Auth /> : <Navigate to="/home" />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/leaderboard" element={<LeaderboardsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
