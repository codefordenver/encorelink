import { getUserToken } from '../reducers/userReducer';

function getApiBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:54321';
  }

  // If we're in a netlify review app => point to the heroku review app
  const { host } = window.location;
  if (host.includes('netlify') && host.startsWith('deploy-preview-')) {
    const prNumber = host.match(/\d{1,}/)[0];
    return `https://encorelink-stage-pr-${prNumber}.herokuapp.com`;
  }

  if (process.env.REACT_APP_API_ENDPOINT) {
    return process.env.REACT_APP_API_ENDPOINT;
  }

  return '';
}
const API_BASE_URL = getApiBaseUrl();

let getState = null;

export function allowApiToAccessState(store) {
  getState = store.getState; // eslint-disable-line prefer-destructuring
}

async function callApi(url, { method, body }) {
  const fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: getUserToken(getState())
    },
    method
  };
  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }
  const res = await fetch(`${API_BASE_URL}/api/${url}`, fetchOptions);

  let json = {};

  if (res.status !== 204) {
    json = await res.json();
  }

  if (!res.ok) {
    const errMessage = json && json.error ? json.error.message : res.statusText;
    throw new Error(errMessage);
  }

  return json;
}

export const get = (url, options) => callApi(url, { ...options, method: 'GET' });
export const post = (url, options) => callApi(url, { ...options, method: 'POST' });
export const patch = (url, options) => callApi(url, { ...options, method: 'PATCH' });
export const put = (url, options) => callApi(url, { ...options, method: 'PUT' });
export const del = (url, options) => callApi(url, { ...options, method: 'DELETE' });
