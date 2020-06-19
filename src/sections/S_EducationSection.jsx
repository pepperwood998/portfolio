import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { AddIcon, MinusIcon } from '../assets/svg';

function EducationSection() {
  return (
    <Accordion defaultActiveKey='0' className='mb-5'>
      <div className='card-accordion'>
        <TogglePanelContainer
          eventKey='0'
          title='Bachelor Degree of Computer Science
'
        />
        <Accordion.Collapse eventKey='0'>
          <div className='card-accordion-body'>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className='card-accordion'>
        <TogglePanelContainer
          eventKey='1'
          title='High School Secondary Education
'
        />
        <Accordion.Collapse eventKey='1'>
          <div className='card-accordion-body'>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
}

function TogglePanelContainer({ title, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <TogglePanel
      toggleCollapse={decoratedOnClick}
      active={isCurrentEventKey}
      title={title}
    />
  );
}

TogglePanel.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  toggleCollapse: PropTypes.func
};

function TogglePanel(props) {
  return (
    <button
      type='button'
      onClick={props.toggleCollapse}
      className='btn-outline-none panel panel-primary'
      data-toggle={props.active}
    >
      <h4 className='panel-title'>{props.title}</h4>
      <CollapseIcon active={props.active} />
    </button>
  );
}

function CollapseIcon({ active }) {
  return active ? (
    <MinusIcon className='baba-icon-24' />
  ) : (
    <AddIcon className='baba-icon-24' />
  );
}

export default EducationSection;
