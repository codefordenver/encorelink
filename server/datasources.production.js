module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },

  postgres: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PW,
    name: 'postgres',
    connector: 'postgresql'
  }
};