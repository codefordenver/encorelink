# EncoreLink

[![Stories Ready to Work On](https://badge.waffle.io/codefordenver/music-volunteers.svg?label=ready&title=Cards%20Ready%20To%20Work%20On)](https://waffle.io/codefordenver/music-volunteers)
[![Build Status](https://travis-ci.org/codefordenver/encorelink.svg?branch=master)](https://travis-ci.org/codefordenver/encorelink)

##General Documentation
The documents we created when building EncoreLink are [here](https://drive.google.com/drive/folders/0BzPSX8eOfTADckNXd3VIc1U3UUE).
Probably the most helpful will be:

*[EncoreLink Specification](https://docs.google.com/document/d/1Mwo-pOyveza1XXKrpr966admHFanHzy5Hn2r6ewE3vk/edit#heading=h.6qqugcr09y1p) - this is our current spec

##Developer Documentation
Developer documentation currently lives [here](DEVDOCS.md)


## Setup - Option 1

1. Install [Node.js](https://nodejs.org/)
2. Install [PostgreSQL](http://www.postgresql.org/)
3. Clone this repo
4. Navigate to your repo folder
5. Run `npm install`
6. Create a new database in postgres
7. Copy the [server/datasources.local.example.json](server/datasources.local.example.json) to `server/datasources.local.json` and update the config to match the postgres database.
8. Run `npm start`

## Other

To gain additional features from StrongLoop, such as clustering, run the
following inside Vagrant, in the `/vagrant` directory:
```bash
npm install -g strongloop
slc run
```

## Linting

This project uses [eslint](http://eslint.org/) for checking coding practices and standards.
It is expected that any opened pull requests have a passing eslint run.

It is highly recommended that you configure your editor to run eslint on the fly
while you code.

Additionally, you can run eslint on the command line with `npm run lint` (or
`npm run lint -- --fix` to have eslint attempt to fix some of the issues)

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
run `npm run heroku` to emulate the config used for
production (visible on localhost:3000).

You might also want to make sure you have the same npm modules that will be
installed on heroku (this can be done with `rm -rf node_modules && npm install
--production`). In this case, you'll have to start the app with
`NODE_ENV=production npm start` (or otherwise export `NODE_ENV=production`
before starting).


## Setup - Option 2 (Vagrant)
NOTE: No one uses this on the project - we all use option one!!!

EncoreLink uses a [Vagrant](https://www.vagrantup.com/) virtual machine as the
development environment. This isolates your dev environment from your host
machine, ensures everyone has the same setup, and automatically installs
everything you need to get going. Just follow these steps:

1. Install or Update [VirtualBox](https://www.virtualbox.org).
2. Install or Update [Vagrant](https://www.vagrantup.com).
3. Run `vagrant plugin install vagrant-hostmanager` to install the [Vagrant Hostmanager Plugin](https://github.com/smdahlen/vagrant-hostmanager).
4. Clone this repository to your machine.
5. Navigate to the repo directory.
6. Run `vagrant up`.
7. Enter your password when prompted.

Running `vagrant up` downloads an Ubuntu image to your host machine and
provisions it with everything this project needs to run. This will take a few
minutes, so be patient.

#### Troubleshooting
For port errors, make sure postgres is not running

### Running the App

Once `vagrant up` has finished, follow these steps to start the server.

1. `vagrant ssh` to login into the virtual machine.
2. `cd /vagrant` to navigate to the project.
3. `npm start` to start the server.
4. Open a second terminal, navigate to the project folder, and run `vagrant rsync-auto` (required for rsync file syncing and webpack hot reload)
5. Open your browser
6.
	- Backend:	http://encorelink.dev:3000/explorer
	- Frontend:	http://encorelink.dev:8080
7. Rejoice!

#### Troubleshooting
-To shut down any running vagrant processes use 'vagrant halt'

-After using 'vagrant destroy' your computer should be left at a clean state, as if you never created the guest machine in the first place.

### Coding

Just code as you normally would in the repo directory you cloned above. Vagrant
automatically syncs with this repo directory and runs your code inside the
virtual machine.
