import {useContext, useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ArchivePage from '../pages/ArchivePage.jsx';
import Navigations from './Navigations.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import AddPage from '../pages/AddPage.jsx';
import Footer from './Footer.jsx';
import NotFoundPage from '../pages/404Page.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import {getUserLogged, putAccessToken} from '../utils/network-data.js';
import RegisterPage from '../pages/RegisterPage.jsx';
import Loading from './Loading.jsx';
import {ThemeContext} from '../contexts/index.jsx';
import toast from 'react-hot-toast';

export default function NoteApps() {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const {theme} = useContext(ThemeContext);

  document.documentElement.setAttribute('data-theme', theme);
  const onLoginSuccess = async ({accessToken}) => {
    putAccessToken(accessToken);
    const {data} = await getUserLogged();
    console.log(data);
    if (data) {
      setUserData(data);
      setAuthenticated(true);
    }
  };

  const onRegisterSuccess = async () => {
    navigate('/');
  };

  useEffect(() => {
    getUserLogged()
      .then(({data}) => {
        if (data) {
          setUserData(data);
          setAuthenticated(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setAuthenticated(false);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onLogoutHandler = () => {
    putAccessToken('');
    setAuthenticated(false);
    setUserData(null);
    navigate('/');
    toast.success('Logout success', {
      position: 'top-right',
    });
  };


  return (
    isLoading ? (
        <div className="flex flex-col min-h-screen">
          <main className="text-center py-28 sm:py-20">
            <Loading/>
          </main>
          <Footer/>
        </div>
      ) :
      isAuthenticated ? (
        <div className="flex flex-col min-h-screen">
          <header>
            <Navigations userName={userData.name} onLogout={onLogoutHandler}/>
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
      ) : (
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
              <Route path="/register" element={<RegisterPage registerSuccess={onRegisterSuccess}/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      )
  );
}
