import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  };
});
