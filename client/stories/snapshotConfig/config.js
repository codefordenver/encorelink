import { configure, setAddon } from '@kadira/storybook';

// Mock out the info addon to just render the story
// This is done to avoid unnecessary bloat in the snapshot tests
/* eslint-disable no-param-reassign */
setAddon({
  addWithInfo(storyName, info, storyFn, _options) {
    if (typeof storyFn !== 'function') {
      if (typeof info === 'function') {
        _options = storyFn;
        storyFn = info;
        info = '';
      } else {
        throw new Error('No story defining function has been specified');
      }
    }

    return this.add(storyName, context => {
      return storyFn(context);
    });
  },
});

function loadStories() {
  require('../index'); // eslint-disable-line global-require
}

configure(loadStories, module);
