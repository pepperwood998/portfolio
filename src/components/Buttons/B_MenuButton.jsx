import PropTypes from 'prop-types';
import React from 'react';

MenuButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.string,
  ariaExpanded: PropTypes.string,
  ariaControls: PropTypes.string
};

function MenuButton(props) {
  let classes = 'boogey-menu-32';
  if (props.active) classes += ' active';
  if (props.className) classes += ` ${props.className}`;
  let finalProps = {
    'type': 'button',
    'className': classes,
    'onClick': props.onClick,
    'aria-controls': props.ariaControls
  };
  if (props.ariaExpanded) finalProps['aria-expanded'] = props.ariaExpanded;

  return <button {...finalProps}></button>;
}

export default MenuButton;
