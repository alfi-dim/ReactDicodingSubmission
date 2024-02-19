import { Label, Textarea } from 'flowbite-react';
import React from 'react';
import PropTypes from 'prop-types';

export default function InputTextarea({
  label, name, value, onChange, placeholder = '', rows = 4,
}) {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} />
      </div>
      <Textarea
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={rows}
      />
    </div>
  );
}

InputTextarea.defaultProps = {
  placeholder: '',
  rows: 4,
};

InputTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};
