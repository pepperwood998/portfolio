import PropTypes from 'prop-types';
import React from 'react';
import { MenuIcon } from '../../assets/svg';

MenuButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  collapsed: PropTypes.bool,
  className: PropTypes.string
};

function MenuButton({ collapsed, className, ...rest }) {
  className += collapsed ? ' collapsed' : '';
  return (
    <button className={className} {...rest}>
      <MenuIcon />
    </button>
  );
}

export default MenuButton;
