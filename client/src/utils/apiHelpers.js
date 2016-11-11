import { getUserToken } from '../reducers/userManager';

let getState = null;

export function allowApiToAccessState(store) {
  getState = store.getState;
}

export default async function callApi(url, options) {
  const res = await fetch(url, {
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
