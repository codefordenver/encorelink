export function getModelNameFromUrl(url) { // eslint-disable-line import/prefer-default-export
  const urlParts = url.split('/');
  return urlParts[0]; // or 2
}
