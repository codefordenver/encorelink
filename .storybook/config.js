import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'EncoreLink Stories',
  url: 'https://github.com/codefordenver/encorelink',
  addonPanelInRight: true,
});

function loadStories() {
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);


// import { configure, setAddon } from '@kadira/storybook';
// import infoAddon from '@kadira/react-storybook-addon-info';
// import { setOptions } from '@kadira/storybook-addon-options';

// setAddon(infoAddon);

// setOptions({
//   name: 'EncoreLink Stories',
//   url: 'https://github.com/codefordenver/encorelink',
//   downPanelInRight: true,
// });

// function loadStories() {
//   // This is what the React Storybook config builder does
//   // I'm going to leave it like this for now
//   require('../src/stories/index.js');
// }

// configure(loadStories, module);
