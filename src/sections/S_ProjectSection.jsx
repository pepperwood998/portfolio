import React from 'react';
import bg5 from '../assets/img/bg5.jpg';
import { ForkIcon, ReloadIcon, StarIcon, WatchIcon } from '../assets/svg';
import useGithubProjects from '../hooks/H_useGithubProjects';

function ProjectSection() {
  const [projects, error, loading, loadMore] = useGithubProjects();

  return (
    <React.Fragment>
      <ol className='display-grid display-grid-2-lg mb-4'>
        {projects.map((v, i) => (
          <li
            className='project-card'
            style={{ backgroundImage: `url(${bg5})` }}
            key={i}
          >
            <div className='project-card-inner'>
              <div className='project-card__project-title'>
                <h3 className='ellipsis-normal'>
                  <a href={v.url}>{v.name}</a>
                </h3>
                <span>{v.language}</span>
              </div>
              <div className='project-card__project-card-status'>
                <div title='Followers' className='project-card-status'>
                  <div className='d-flex align-items-center'>
                    <WatchIcon className='baba-icon-16 mr-2' />
                  </div>
                  <span className='ellipsis-normal'>{v.watchersCount}</span>
                </div>
                <div title='Favorite' className='project-card-status'>
                  <div className='d-flex align-items-center'>
                    <StarIcon className='baba-icon-16 mr-2' />
                  </div>
                  <span className='ellipsis-normal'>{v.starsCount}</span>
                </div>
                <div title='Forked branches' className='project-card-status'>
                  <div className='d-flex align-items-center'>
                    <ForkIcon className='baba-icon-16 mr-2' />
                  </div>
                  <span className='ellipsis-normal'>{v.forksCount}</span>
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
