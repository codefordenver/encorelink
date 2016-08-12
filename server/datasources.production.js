module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },

  postgres: {
    url: process.env.DATABASE_URL,
    name: 'postgres',
    connector: 'postgresql'
  }
};
