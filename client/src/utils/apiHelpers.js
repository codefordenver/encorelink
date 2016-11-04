export default async function callApi(url, options) {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.userToken
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
