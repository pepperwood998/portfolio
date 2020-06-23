import PropTypes from 'prop-types';
import React from 'react';
import './sidebar.css';

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  className: PropTypes.string
};

function Sidebar({ collapsed, className, children, ...rest }) {
  let babaSidebar = 'baba-sidebar';
  className += collapsed ? ` ${babaSidebar} collapsed` : ` ${babaSidebar}`;

  return (
    <aside className={className} {...rest}>
      {children}
    </aside>
  );
}

export default Sidebar;
