// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '../hooks/customHooks.js';

export default function Header({title}) {
  const {textColor, borderColor} = useTheme();
  return (
    <div className={`mx-auto w-full lg:mx-0 border-b ${borderColor} pb-4`}>
      <h2 className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}>{title}</h2>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};