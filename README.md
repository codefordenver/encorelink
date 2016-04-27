# Keto Hero

[waffle board for project tasks](https://waffle.io/codefordenver/ketohero)

## Setup - Option 1 (Vagrant)

Keto Hero uses a [Vagrant](https://www.vagrantup.com/) virtual machine as the
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

### Running the App

Once `vagrant up` has finished, follow these steps to start the server.

1. `vagrant ssh` to login into the virtual machine.
2. `cd /vagrant` to navigate to the project.
3. `node .` to start the server.
4. Open your browser
5. 
	- Backend:	http://ketohero.dev:3000/explorer
	- Frontend:	http://ketohero.dev:8080/client
6. Rejoice!

### Coding

Just code as you normally would in the repo directory you cloned above. Vagrant
automatically syncs with this repo directory and runs your code inside the
virtual machine.

## Setup - Option 2 (DIY)

1. Install [Node.js](https://nodejs.org/)
2. Install [PostgreSQL](http://www.postgresql.org/)
3. Clone this repo
4. Navigate to your repo folder
5. Run `npm install`
6. Create a new database in postgres
7. Copy the [server/datasources.local.example.json](server/datasources.local.example.json) to `server/datasources.local.json` and update the config to match the postgres database.
8. Run `node .`

## Other

To gain additional features from StrongLoop, such as clustering, run the
following inside Vagrant, in the `/vagrant` directory:
```
npm install -g strongloop
slc run
```
