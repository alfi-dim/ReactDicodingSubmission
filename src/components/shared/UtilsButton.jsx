import React from 'react';
import PropTypes from 'prop-types';

export default function UtilsButton({
  label = 'button',
  text = 'button',
  icon = null,
  onClickHandler = null,
  styles = '',
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={styles}
      onClick={onClickHandler}
    >
      {icon}
      {text}
    </button>
  );
}

UtilsButton.defaultProps = {
  label: 'button',
  text: 'button',
  icon: null,
  onClickHandler: null,
  styles: '',
};

UtilsButton.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  styles: PropTypes.string,
  text: PropTypes.string,
};
