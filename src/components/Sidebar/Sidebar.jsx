import PropTypes from 'prop-types';
import React from 'react';
import './sidebar.css';

Sidebar.propTypes = {
  active: PropTypes.bool,
  onSetSidebarOpen: PropTypes.func,
  className: PropTypes.string
};

function Sidebar(props) {
  let sideBarClasses = 'side-bar';
  if (props.active) {
    sideBarClasses += ' active';
  }
  if (props.className) sideBarClasses += ` ${props.className}`;

  return <aside className={sideBarClasses}>{props.children}</aside>;
}

export default Sidebar;
