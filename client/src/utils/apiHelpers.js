import { getUserToken } from '../reducers/userManager';

let getState = null;

export function allowApiToAccessState(store) {
  getState = store.getState;
}

async function callApi(url, options) {
  const res = await fetch(`/api/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: getUserToken(getState())
    },
    ...options
  });
  const json = await res.json();

  if (!res.ok) {
    const errMessage = json.error ? json.error.message : res.statusText;
    throw new Error(errMessage);
  }

  return json;
}
export default callApi;

export const get = (url, options) => callApi(url, { ...options, method: 'GET' });
export const post = (url, options) => callApi(url, { ...options, method: 'POST' });
export const patch = (url, options) => callApi(url, { ...options, method: 'PATCH' });
export const put = (url, options) => callApi(url, { ...options, method: 'PUT' });
export const del = (url, options) => callApi(url, { ...options, method: 'DELETE' });
