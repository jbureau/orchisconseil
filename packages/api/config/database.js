module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'orchisconseil'),
      user: env('DATABASE_USERNAME', 'julie'),
      password: env('DATABASE_PASSWORD', '')
    },
    debug: false,
  },
});
