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
