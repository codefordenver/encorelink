import { getUserToken } from '../reducers/userReducer';

let getState = null;

export function allowApiToAccessState(store) {
  getState = store.getState;
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
  const res = await fetch(`/api/${url}`, fetchOptions);

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
