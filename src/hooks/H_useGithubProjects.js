import { useEffect, useState } from 'react';
import { fetchGithubProjects } from '../api/A_CommonAPI';

function useGithubProjects() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [requestLoadMore, setRequestLoadMore] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const loadMore = () => {
    setRequestLoadMore(true);
  };
  useEffect(() => {
    if (!requestLoadMore) return;

    (async () => {
      setLoading(true);
      try {
        let newPage = page + 1;
        const res = await fetchGithubProjects(newPage);
        const { data = [] } = res;
        setPage(newPage);
        setProjects([...projects, ...data.map(v => mapProject(v))]);
      } catch (e) {
        console.error(e);
        setError(e.toString());
      } finally {
        setLoading(false);
        setRequestLoadMore(false);
      }
    })();
  }, [requestLoadMore]);

  return [projects, error, loading, loadMore];
}

const mapProject = project => ({
  name: project.name,
  language: project.language,
  watchersCount: project['watchers_count'],
  starsCount: project['stargazers_count'],
  forksCount: project['forks_count'],
  url: project['html_url']
});

export default useGithubProjects;
