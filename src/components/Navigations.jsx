import {Fragment, useContext, useState} from 'react';
import {Dialog, Menu, Popover, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';
import {FiArchive, FiFile, FiFilePlus, FiMenu, FiXCircle} from 'react-icons/fi';
import {HiTranslate} from 'react-icons/hi';
import {MdBedtime, MdBedtimeOff} from 'react-icons/md';
import {LocaleContext, ThemeContext} from '../contexts/index.jsx';
import {useLocale, useTheme} from '../hooks/customHooks.js';
import {func, string} from 'prop-types';

function Navigation({userName, onLogout}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {locale, toggleLocale} = useContext(LocaleContext);
  const {theme, toggleTheme} = useContext(ThemeContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const {bgColor, textColor, logo} = useTheme();

  return (
    <header className={`${bgColor} fixed w-full`}>
      <nav
        className={`${textColor} mx-auto flex max-w-full items-center justify-between p-2 lg:pl-8`}
        aria-label="Global">

        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            {/*{*/}
            {/*  useLocale('Notes App', 'Aplikasi Catatan')*/}
            {/*}*/}
            <img src={logo} alt="logo" className="h-8 w-auto sm:h-10"/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6"/>
          </button>
        </div>
        <Popover.Group className="hidden lg:grid lg:grid-cols-7 lg:gap-x-2">
          <span className="hidden lg:grid col-span-5 lg:grid-cols-3 lg:gap-x-2">
            <Link to="/" className="text-sm justify-center lg:flex font-semibold leading-8 hover:underline">
            {
              useLocale('Active Note', 'Catatan Aktif')
            }
              <FiFile className="h-5 w-5 mt-2 ml-2"/>
            </Link>
            <Link to="/archive" className="text-sm justify-center lg:flex font-semibold leading-8 hover:underline">
              {
                useLocale('Archive Note', 'Arsip Catatan')
              }
              <FiArchive className="h-5 w-5 mt-2 ml-2"/>
            </Link>
            <Link to="/add" className="text-sm justify-center lg:flex font-semibold leading-8 hover:underline">
              {
                useLocale('Add Note', 'Tambah Catatan')
              }
              <FiFilePlus className="h-5 w-5 mt-2 ml-2"/>
            </Link>
          </span>
          <span className="text-sm w-fit lg:grid lg:grid-cols-2 lg:gap-x-1 font-semibold leading-8">
            <button onClick={toggleLocale} className="flex items-center justify-center hover:underline"
            ><HiTranslate className="w-5 h-5"/> {locale.toUpperCase()}</button>
            <button onClick={toggleTheme}>
              {theme !== 'dark'
                ? <MdBedtime className="w-5 h-5"/>
                : <MdBedtimeOff className="w-5 h-5"/>
              }
              </button>
          </span>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"/>
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-gray-800 ring-2 ring-white">
                  <img
                    className="h-full w-full rounded-full"
                    src={`https://ui-avatars.com/api/?name=${userName}&background=1e293b&color=fff&rounded=true`}
                    alt="user photo profile"
                  />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {() => (
                    <p
                      className='block px-4 py-2 text-sm text-gray-700'
                    >
                      {userName}
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <button
                      className={classNames(active ? 'bg-gray-100' : '', 'text-left w-full block px-4 py-2 text-sm text-gray-700')}
                      onClick={onLogout}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${bgColor} ${textColor} px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{useLocale('Notes App', 'Aplikasi Catatan')}</span>
            </Link>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 ${textColor}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiXCircle className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                <Link to="/" className={`flex items-center gap-1 text-sm font-semibold leading-6 ${textColor}`}>
                  {useLocale('Active Notes', 'Catatan Aktif')} <FiFile/>
                </Link>
                <Link to="/archive" className={`flex items-center gap-1 text-sm font-semibold leading-6 ${textColor}`}>
                  {useLocale('Archive Notes', 'Arsip Catatan')} <FiArchive/>
                </Link>
                <Link to="/add" className={`flex items-center gap-1 text-sm font-semibold leading-6 ${textColor}`}>
                  {useLocale('Add Note', 'Tambah Catatan')} <FiFilePlus/>
                </Link>
                <button onClick={toggleLocale} className="flex hover:underline"
                ><HiTranslate className="w-5 h-5"/> {locale.toUpperCase()}</button>
                <button onClick={toggleTheme}>
                  {theme !== 'dark'
                    ? <MdBedtime className="w-5 h-5"/>
                    : <MdBedtimeOff className="w-5 h-5"/>
                  }
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

Navigation.propTypes = {
  userName: string.isRequired,
  onLogout: func.isRequired,
};

export default Navigation;
