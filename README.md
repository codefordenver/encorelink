# Keto Hero

[waffle board for project tasks](https://waffle.io/codefordenver/ketohero)

### Dependencies
You will need:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](http://www.postgresql.org/)

### Set up
After cloning, run `npm install` to install the necessary node dependencies.

Create a new database in postgres, and then copy the [server/datasources.local.example.json](server/datasources.local.example.json) to `server/datasources.local.json` and update the config to match the postgres database.

### Start App
To start the app run:
```
node .
```
or to gain additional features from strongloop (you will need to `npm install -g strongloop`) such as clustering:
```
slc run
```
