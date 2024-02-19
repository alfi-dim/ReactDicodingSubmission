import React from 'react';
import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function FormButton({ type, label, clickHandler = null }) {
  return (
    <Button
      type={type}
      className="text-white"
      onClick={clickHandler}
    >
      {label}
    </Button>
  );
}

FormButton.defaultProps = {
  clickHandler: null,
};

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};
