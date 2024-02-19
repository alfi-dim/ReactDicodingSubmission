import React from 'react';
import { Label, TextInput } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function InputText({
  label, name, value, onChange, placeholder = '', type = 'text',
}) {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} />
      </div>
      <TextInput
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

InputText.defaultProps = {
  type: 'text',
  placeholder: '',
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
