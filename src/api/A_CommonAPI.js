import axios from 'axios';

const githubEndpoint = 'https://api.github.com';
const fakeEndpoint = 'http://localhost:3001';
export const fetchGithubProjects = (
  page = 1,
  perPage = 5,
  username = 'zuratama'
) => {
  let params = new URLSearchParams({
    page: page,
    per_page: perPage,
    sort: 'updated'
  });
  return fetchGithub(`/users/${username}/repos`, params);
};
const fetchGithub = (uri = '/', params = new URLSearchParams()) => {
  let url = new URL(`${fakeEndpoint}${uri}`);
  url.search = params;
  return axios.get(url);
};
