const modelAliases = {
  events: 'events',
  eventsAttending: 'events',

  users: 'users',
  volunteers: 'users',
  admin: 'users',
  owner: 'users',

  eventVolunteers: 'eventVolunteers',
  organizations: 'organizations',
  organization: 'organization',
};

const relLookup = {
  eventsAttending: 'eventVolunteers',
  volunteers: 'eventVolunteers'
};

function getModelAlias(name) {
  return modelAliases[name];
}

export function getModelNameFromUrl(url) {
  const urlWithoutQuery = url.split('?')[0];
  const urlParts = urlWithoutQuery.split('/');

  switch (urlParts.length) {
    case 1:
    case 2:
      return getModelAlias(urlParts[0]);

    case 3:
    case 4:
      return getModelAlias(urlParts[2]);

    case 5:
      if (urlParts[3] === 'rel') {
        return relLookup[urlParts[2]];
      }

    default: // eslint-disable-line no-fallthrough
      throw new Error('unable to identify modelName from url');
  }
}

export function urlHasQueryParams(url) {
  return url.indexOf('?') >= 0;
}
