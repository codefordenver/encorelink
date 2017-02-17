import { configure } from '@kadira/storybook';

function loadStories() {
  // This is what the React Storybook config builder does
  // I'm going to leave it like this for now
  require('./index'); // eslint-disable-line global-require
}

configure(loadStories, module);
