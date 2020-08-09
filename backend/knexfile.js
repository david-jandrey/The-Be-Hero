// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '189.8.214.4',
      port: 3306,
      database: 'david_teste',
      user:     'david',
      password: 'Jandrey@2020'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '189.8.214.4',
      port: 3306,
      database: 'david_teste',
      user:     'david',
      password: 'Jandrey@2020'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
