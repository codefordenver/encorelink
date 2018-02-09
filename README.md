# EncoreLink

[![Stories Ready to Work On](https://badge.waffle.io/codefordenver/music-volunteers.svg?label=ready&title=Cards%20Ready%20To%20Work%20On)](https://waffle.io/codefordenver/music-volunteers)
[![Build Status](https://travis-ci.org/codefordenver/encorelink.svg?branch=master)](https://travis-ci.org/codefordenver/encorelink)

## General Documentation
The documents we created when building EncoreLink are [here](https://drive.google.com/drive/folders/0BzPSX8eOfTADckNXd3VIc1U3UUE).
Probably the most helpful will be:

*[EncoreLink Specification](https://docs.google.com/document/d/1Mwo-pOyveza1XXKrpr966admHFanHzy5Hn2r6ewE3vk/edit#heading=h.6qqugcr09y1p) - this is our current spec

## Developer Documentation
Developer documentation currently lives [here](DEVDOCS.md)


## Setup

1. Install [Node.js](https://nodejs.org/) (The official node verion for this app is 6.9, although other modern versions will probably work fine)
2. Clone this repo
3. Navigate to your repo folder
4. Run `npm install`
5. Run `npm start`

## Linting

This project uses [eslint](http://eslint.org/) for checking coding practices and standards.
It is expected that any opened pull requests have a passing eslint run.

It is _highly recommended_ that you configure your editor to run eslint on the fly
while you code.

Additionally, you can run eslint on the command line with `npm run lint` (or
`npm run lint -- --fix` to have eslint attempt to fix some of the issues it finds)

## Testing

This project uses Facebook's [jest](https://facebook.github.io/jest/) library for testing,
and takes advantage of their [snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing).

For development run:

```bash
npm test -- --watch
```

This will run the tests in an interactive mode, where tests will automatically be
re-run when files are changed, and snapshots can be updated on the fly.

## Things work locally but not on Heroku...
We run the app with a different configuration for local development than we do
for deploying. If things work when running locally, but fail when deploying,
run `npm prune --production` to set your `node_modules` to match production and
run `npm run heroku` to emulate the config used for production (visible on
localhost:3000).

You might also want to make sure you have the same npm modules that will be
installed on heroku (this can be done with `rm -rf node_modules && npm install
--production`). In this case, you'll have to start the app with
`NODE_ENV=production npm start` (or otherwise export `NODE_ENV=production`
before starting).


## Advanced Setup - Postgres

1. Install [PostgreSQL](http://www.postgresql.org/)
2. Create a new database in postgres
3. Rename [server/datasources.local.example.json](server/datasources.local.example.json) to `server/datasources.local.json` and update the config to match the postgres database.


## Client App State
This project uses Redux for managing state on the client. There is a neat
[Redux DevTools browser extension](http://extension.remotedev.io/) that can help with
understanding and debugging what is happening in the app as a user interacts with the client.

The [Chrome version of the plugin can be found here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## React Storybook

We have integrated [React Storybook](https://getstorybook.io) for development of React components
in isolation independent of having to wire up data from the app.

To run react storybook, run `npm run storybook`
This will start storybook running at http://localhost:6006

Stories are defined for components in [client/stories/index.js](client/stories/index.js).
For docs on how to write stories see the [storybook docs](https://getstorybook.io/docs/react-storybook/basics/writing-stories).
