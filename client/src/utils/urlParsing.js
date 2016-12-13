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

function getModelAlias(name) {
  return modelAliases[name];
}

export function getModelNameFromUrl(url) { // eslint-disable-line import/prefer-default-export
  const urlParts = url.split('/');

  switch (urlParts.length) {
    case 1:
    case 2:
      return getModelAlias(urlParts[0]);

    case 3:
    case 4:
      return getModelAlias(urlParts[2]);

    default:
      throw new Error('unable to identify modelName from url');
  }
}
