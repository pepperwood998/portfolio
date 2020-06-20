import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link as ScrollLink } from 'react-scroll';
import Avatar from './assets/img/avatar.jpg';
import bg1 from './assets/img/bg1.jpg';
import bg2 from './assets/img/bg2.jpg';
import bg3 from './assets/img/bg3.jpg';
import bg4 from './assets/img/bg4.jpg';
import {
  ArchitectureIcon,
  CssIcon,
  DevIcon,
  JavaIcon,
  JsIcon,
  LangIcon,
  MysqlIcon,
  ReactIcon,
  SpringIcon,
  WebIcon,
  WorkIcon
} from './assets/svg';
import { formatNumber } from './Common';
import { MenuButton } from './components/buttons';
import MainSection from './components/sections/S_MainSection';
import { Sidebar } from './components/sidebar';
import { ContactSection, EducationSection, ProjectSection } from './sections';

function App() {
  const [sideBarActive, setSideBarActive] = useState(false);

  const carouselItems = [
    {
      image: bg1,
      title: 'First slide label',
      content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: bg2,
      title: 'Second slide label',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: bg3,
      title: 'Third slide label',
      content:
        "I'm gonna start a revolution fron my bed. Cause they said the brain I had went to my head."
    }
  ];
  const aboutItems = [
    { title: 'Web Design', icon: WebIcon, theme: 'blue' },
    { title: 'Software Development', icon: DevIcon, theme: 'red' },
    { title: 'Software Architecture', icon: ArchitectureIcon, theme: 'yellow' },
    { title: 'Languages', icon: LangIcon, theme: 'purple' }
  ];
  const statisticItems = [
    { counter: 69, label: 'Personal projects' },
    { counter: 5, label: 'Code years' },
    { counter: 0, label: 'Self esteem' },
    { counter: 20, label: 'Group projects' }
  ];
  const specialtyItems = [
    { title: 'Javascript', desc: '', theme: 'yellow', icon: JsIcon },
    { title: 'Java', desc: '', theme: 'orange', icon: JavaIcon },
    { title: 'HTML & CSS', desc: '', theme: 'red', icon: CssIcon },
    { title: 'ReactJS', desc: '', theme: 'blue', icon: ReactIcon },
    { title: 'Spring Boot', desc: '', theme: 'green', icon: SpringIcon },
    { title: 'MySQL', desc: '', theme: 'blue-dark', icon: MysqlIcon }
  ];
  const timelineItems = [
    {
      title: 'Topica IT Talent Internship',
      time: '04 - 07/2019',
      description:
        'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.'
    }
  ];
  let sideBarOverlayClasses = 'side-bar-overlay';
  sideBarOverlayClasses += sideBarActive ? ' active' : '';
  const handleToggleSideBar = () => {
    setSideBarActive(!sideBarActive);
  };
  const handleSetSidebarOpen = open => {
    setSideBarActive(open);
  };

  return (
    <div className='App'>
      <div className='top-banner-wrapper'>
        <div className='top-banner'>
          <MenuButton
            className='side-bar-toggler-button'
            active={sideBarActive}
            onClick={handleToggleSideBar}
            ariaExpanded={sideBarActive.toString()}
            ariaControls='sidebar'
          />
          <h3 className='top-banner__title ellipsis-normal'>
            <span>Tuan Dao</span>
          </h3>
        </div>
      </div>
      <div
        className={sideBarOverlayClasses}
        onClick={() => handleSetSidebarOpen(false)}
      ></div>
      <Sidebar active={sideBarActive} onSetSidebarOpen={handleSetSidebarOpen}>
        <SidebarContent setSideBarActive={setSideBarActive} />
      </Sidebar>

      <div className='App__main-content' id='container-scroll'>
        <main className='main-content'>
          <section className='main-content__section' id='home'>
            <Carousel>
              {carouselItems.map((v, i) => (
                <Carousel.Item key={i}>
                  <div
                    className='carousel-background'
                    style={{ backgroundImage: `url(${v.image})` }}
                  ></div>
                  <Carousel.Caption>
                    <h3>{v.title}</h3>
                    <p>{v.content}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </section>
          <MainSection id='about' small='Who am I?' big='About me'>
            <p>
              Hi I'm Jackson Ford On her way she met a copy. The copy warned the
              Little Blind Text, that where it came from it would have been
              rewritten a thousand times and everything that was left from its
              origin would be the word "and" and the Little Blind Text should
              turn around and return to its own, safe country.
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <div className='display-grid display-grid-2-sm display-grid-4-lg mb-5'>
              {aboutItems.map((v, i) => (
                <div className={`basic-card basic-card--${v.theme}`} key={i}>
                  <div className='basic-card-inner'>
                    <v.icon className='baba-icon-32 basic-card-icon' />
                    <h2 className='basic-card-title'>{v.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </MainSection>
          <section className='main-content__section'>
            <div
              className='statistic-banner'
              style={{ backgroundImage: `url(${bg4})` }}
            >
              <div className='statistic-banner__overlay'></div>
              <div className='statistic-banner__content content-padder'>
                <div className='display-grid display-grid-2-sm display-grid-4-md'>
                  {statisticItems.map((v, i) => (
                    <div className='statistic-block' key={i}>
                      <span className='statistic-counter'>
                        {formatNumber(v.counter)}
                      </span>
                      <span className='statistic-counter-label'>{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <MainSection id='skills' small="What I'm capable of?" big='My skills'>
            <p>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>
            <div className='display-grid display-grid-2-sm display-grid-3-lg pt-5'>
              {specialtyItems.map((v, i) => {
                return (
                  <div
                    className={`basic-card basic-card--${v.theme} basic-card--pop`}
                    key={i}
                  >
                    <div className='basic-card-inner'>
                      <div className='basic-card-icon-wrapper'>
                        <v.icon className='baba-icon-32' />
                      </div>
                      <h2 className='basic-card-title'>{v.title}</h2>
                      <p className='basic-card-desc'>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MainSection>
          <section className='main-content__section'>
            <div className='content-padder'>
              <div className='jumbotron-banner'>
                <h2>
                  Give me your pussy
                  <br />
                  You will not be disappointed!
                </h2>
              </div>
            </div>
          </section>
          <MainSection
            id='experience'
            small="What I've been doing?"
            big='Experience'
          >
            <div className='timeline-normal mb-3'>
              {timelineItems.map((v, i) => (
                <article className='timeline-entry' key={i}>
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon baba-bg--blue'>
                      <WorkIcon className='baba-icon-24' />
                    </div>
                    <div className='timeline-content'>
                      <h2>
                        <span>{v.title}</span>
                        <span className='timeline-content__time-range-text'>
                          {v.time}
                        </span>
                      </h2>
                      <p>{v.description}</p>
                    </div>
                  </div>
                </article>
              ))}
              <article className='timeline-entry'>
                <div className='timeline-entry-inner'>
                  <div className='timeline-icon timeline-icon--empty'></div>
                </div>
              </article>
            </div>
          </MainSection>
          <MainSection
            id='projects'
            small='My personnal project'
            big='Recent projects'
          >
            <ProjectSection />
          </MainSection>
          <MainSection
            id='education'
            small='How is my educational path?'
            big='Education'
          >
            <EducationSection />
          </MainSection>
          <MainSection id='contact' small='Get in touch' big='Contact'>
            <ContactSection />
          </MainSection>
        </main>
      </div>
    </div>
  );
}

SidebarContent.defaultProps = {
  setSideBarActive: () => {}
};
SidebarContent.propTypes = {
  setSideBarActive: PropTypes.func
};
function SidebarContent(props) {
  const navItems = [
    {
      section: 'home',
      title: 'Home'
    },
    {
      section: 'about',
      title: 'About'
    },
    {
      section: 'skills',
      title: 'Skills'
    },
    {
      section: 'experience',
      title: 'Experience'
    },
    {
      section: 'projects',
      title: 'Projects'
    },
    {
      section: 'education',
      title: 'Education'
    },
    {
      section: 'contact',
      title: 'Contact'
    }
  ];

  return (
    <React.Fragment>
      <header className='side-bar__header' role='banner'>
        <div className='side-bar-avatar'>
          <div className='image-wrapper'>
            <img src={Avatar} alt='Profile cover' className='image' />
          </div>
        </div>
        <h2 className='side-bar-title'>Tuan Dao</h2>
        <span className='side-bar-profession'>Web Developer</span>
      </header>
      <div className='side-bar__nav'>
        <nav className='nav-bar' role='navigation'>
          <ul className='nav-bar-nav'>
            {navItems.map((item, i) => (
              <li className='nav-bar-item' key={i}>
                <ScrollLink
                  to={item.section}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={300}
                  containerId='container-scroll'
                  className='nav-bar-link'
                  onClick={() => {
                    props.setSideBarActive(false);
                  }}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default App;
