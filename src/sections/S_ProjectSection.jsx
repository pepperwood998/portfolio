import React from 'react';
import bg5 from '../assets/img/bg5.jpg';
import {
  ForkIcon,
  ReloadIcon,
  StarIcon,
  WatchIcon,
  ArrowRightIcon
} from '../assets/svg';
import useGithubProjects from '../hooks/H_useGithubProjects';
import BgRepo1 from '../assets/img/bg-repo-1.jpg';
import BgRepo2 from '../assets/img/bg-repo-2.jpg';
import BgRepo3 from '../assets/img/bg-repo-3.jpg';
import BgRepo4 from '../assets/img/bg-repo-4.jpg';
import BgRepo5 from '../assets/img/bg-repo-5.jpg';
import BgRepo6 from '../assets/img/bg-repo-6.jpg';
import BgRepo7 from '../assets/img/bg-repo-7.jpg';
import BgRepo8 from '../assets/img/bg-repo-8.jpg';
import BgRepo9 from '../assets/img/bg-repo-9.jpg';
import BgRepo10 from '../assets/img/bg-repo-10.jpg';

const bgList = [
  BgRepo1,
  BgRepo2,
  BgRepo3,
  BgRepo4,
  BgRepo5,
  BgRepo6,
  BgRepo7,
  BgRepo8,
  BgRepo9,
  BgRepo10
];
const getRoundBg = count => {
  return bgList[count % bgList.length];
};
function ProjectSection() {
  const [projects, error, loading, loadMore] = useGithubProjects();

  return (
    <React.Fragment>
      <ol className='display-grid display-grid-2-md display-grid-3-lg display-grid-4-xl mb-4'>
        {projects.map((v, i) => (
          <li className='project-card-wrapper project-card-wrapper-md' key={i}>
            <div className='project-card'>
              <div
                className='project-card-inner'
                style={{ backgroundImage: `url(${getRoundBg(i)})` }}
              >
                <div className='project-card-info'>
                  <div className='project-card-info-overlay'></div>
                  <p>{v.description}</p>
                  <h3 className='ellipsis-normal'>
                    <a href='/'>{v.name}</a>
                  </h3>
                  <span className='ellipsis-normal'>{v.language}</span>
                </div>
                <div className='project-card-stats'>
                  <div className='project-card-status'>
                    <div className='d-flex align-items-center'>
                      <WatchIcon className='baba-icon-16' />
                    </div>
                    <span className='ellipsis-normal pl-2'>
                      {v.watchersCount}
                    </span>
                  </div>
                  <div className='project-card-status'>
                    <div className='d-flex align-items-center'>
                      <StarIcon className='baba-icon-16' />
                    </div>
                    <span className='ellipsis-normal pl-2'>{v.starsCount}</span>
                  </div>
                  <div className='project-card-status'>
                    <div className='d-flex align-items-center'>
                      <ForkIcon className='baba-icon-16' />
                    </div>
                    <span className='ellipsis-normal pl-2'>{v.forksCount}</span>
                  </div>
                </div>
                <button className='project-card-view btn-outline-none'></button>
                <ArrowRightIcon className='baba-icon-24 project-card-forward' />
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
