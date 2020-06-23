import PropTypes from 'prop-types';
import React from 'react';

MainSection.propTypes = {
  id: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
  big: PropTypes.string.isRequired,
  as: PropTypes.string
};
MainSection.defaultProps = {
  as: 'section'
};

function MainSection(props) {
  return (
    <props.as className='main-content__section' id={props.id}>
      <div className='content-padder'>
        <header className='main-content-header'>
          <span className='main-content-header__small-text'>{props.small}</span>
          <h2 className='main-content-header__big-text'>{props.big}</h2>
        </header>
        <div className='main-content-details'>{props.children}</div>
      </div>
    </props.as>
  );
}

export default MainSection;
