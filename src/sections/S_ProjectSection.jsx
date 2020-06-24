import React from 'react';
import bg5 from '../assets/img/bg5.jpg';
import { ForkIcon, ReloadIcon, StarIcon, WatchIcon } from '../assets/svg';
import useGithubProjects from '../hooks/H_useGithubProjects';

function ProjectSection() {
  const [projects, error, loading, loadMore] = useGithubProjects();

  return (
    <React.Fragment>
      <ol className='display-grid display-grid-2-md display-grid-3-xl mb-4'>
        {projects.map((v, i) => (
          <li className='project-card-wrapper project-card-wrapper-md' key={i}>
            <div className='project-card'>
              <div className='project-card-inner'>
                <div className='project-card-info'>
                  <p>
                    This project is the portfolio for my career application.
                    Built with ReactJS with responsive design
                  </p>
                  <h3 className='ellipsis-normal'>
                    <a href='/'>The Portfolio</a>
                  </h3>
                  <span className='ellipsis-normal'>Javascript</span>
                </div>
                <div className='project-card-action'>
                  <div className='project-card-stats'>
                    <div className='project-card-status'>
                      <div className='d-flex align-items-center'>
                        <WatchIcon className='baba-icon-16' />
                      </div>
                      <span className='ellipsis-normal pl-2'>125</span>
                    </div>
                    <div className='project-card-status'>
                      <div className='d-flex align-items-center'>
                        <StarIcon className='baba-icon-16' />
                      </div>
                      <span className='ellipsis-normal pl-2'>69</span>
                    </div>
                  </div>
                  <button className='project-card-view'></button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <button
        type='button'
        onClick={loadMore}
        disabled={loading}
        className='btn btn-load-more btn-primary'
      >
        <span className='mr-2'>Load more</span>
        <ReloadIcon className='baba-icon-24' />
      </button>
    </React.Fragment>
  );
}

export default ProjectSection;
