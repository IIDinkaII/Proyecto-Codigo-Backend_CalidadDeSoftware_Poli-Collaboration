import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE,
      host: process.env.HOST,
      databasePort: process.env.DATABASE_PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    port: process.env.PORT,
  };
});
