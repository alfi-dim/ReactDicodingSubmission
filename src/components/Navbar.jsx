'use client';

import React from 'react';
import {
  Avatar, Button, DarkThemeToggle, Dropdown, Navbar,
} from 'flowbite-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ForumLogo from '../../public/logo.webp';
import { asyncUnsetAuthUser } from '../states/auth/action';
import { asyncPreloadProcess } from '../states/isPreload/action';

export default function NavbarFlowbite({ authUser }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const [navActive, setNavActive] = React.useState({
    home: false,
    about: false,
    leaderboard: false,
  });
  React.useEffect(() => {
    const { pathname } = location;
    const baseRoute = pathname.split('/')[1];
    setNavActive({
      home: baseRoute === 'home',
      about: baseRoute === 'about',
      leaderboard: baseRoute === 'leaderboard',
    });
  }, [location]);
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    if (location.pathname === '/home/thread/new') {
      navigation('/home');
    }
  };
  return (
    <Navbar fluid className="bg-forum-primary dark:bg-forum-dark-primary">
      <Navbar.Brand href="#">
        <img src={ForumLogo} className="mr-3 h-9 sm:h-12" alt="React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Forum App</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {
          authUser
            ? (
              <Dropdown
                label={<Avatar alt="User settings" img={authUser?.avatar} rounded />}
                arrowIcon={false}
                inline
              >
                <Dropdown.Header>
                  <span className="block text-sm">{authUser?.name}</span>
                  <span className="block truncate text-sm font-medium">{authUser?.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={onSignOut}>Sign out</Dropdown.Item>
              </Dropdown>
            )
            : (
              <Button
                href="/auth/login"
                className="mr-2"
                variant="secondary"
              >
                Login
              </Button>
            )
        }
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/home" active={navActive.home}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/leaderboard" active={navActive.leaderboard}>Leaderboard</Navbar.Link>
        <Navbar.Link href="/about" active={navActive.about}>About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavbarFlowbite.propTypes = {
  authUser: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
