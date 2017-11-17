import initStoryshots from 'storyshots';
import moment from 'moment-timezone';

moment.tz.setDefault('Europe/London');
moment.tz.guess = jest.fn(() => 'Europe/London');

initStoryshots({
  configPath: 'client/stories/snapshotConfig'
});
