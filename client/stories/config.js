import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

setAddon(infoAddon);

setOptions({
  name: 'EncoreLink Stories',
  url: 'https://github.com/codefordenver/encorelink',
  downPanelInRight: true,
});

function loadStories() {
  // This is what the React Storybook config builder does
  // I'm going to leave it like this for now
  require('./index'); // eslint-disable-line global-require
}

configure(loadStories, module);
