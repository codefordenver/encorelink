import initStoryshots from '@storybook/addon-storyshots';
import moment from 'moment-timezone';
import * as addonInfo from '@storybook/addon-info';

moment.tz.setDefault('Europe/London');
moment.tz.guess = jest.fn(() => 'Europe/London');
addonInfo.withInfo = jest.fn(() => (renderer) => renderer);

process.env.REACT_APP_GOOGLE_API_KEY = 'REDACTED';

initStoryshots();
