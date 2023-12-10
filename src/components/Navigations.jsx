// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArchive, FiFile, FiFilePlus, FiMenu, FiXCircle} from 'react-icons/fi';
import {Dialog, Popover} from '@headlessui/react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            Notes App
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6"/>
          </button>
        </div>
        <Popover.Group className="hidden lg:grid lg:grid-cols-3 lg:gap-x-12">
          <Link to="/" className="text-sm lg:flex font-semibold leading-8 text-gray-900">
            Active Note <FiFile className="h-5 w-5 mt-2 ml-2"/>
          </Link>
          <Link to="/archive" className="text-sm lg:flex font-semibold leading-8 text-gray-900">
            Archive Note <FiArchive className="h-5 w-5 mt-2 ml-2"/>
          </Link>
          <Link to="/add" className="text-sm lg:flex font-semibold leading-8 text-gray-900">
            Add Note <FiFilePlus className="h-5 w-5 mt-2 ml-2"/>
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              Notes App
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiXCircle className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                  Active Note <FiFile/>
                </Link>
                <Link to="/archive" className="text-sm font-semibold leading-6 text-gray-900">
                  Archive Note <FiArchive/>
                </Link>
                <Link to="/add" className="text-sm font-semibold leading-6 text-gray-900">
                  Add Note <FiFilePlus/>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navigation;
