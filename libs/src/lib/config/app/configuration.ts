import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  postgresUser: process.env['POSTGRES_USER'],
  postgresPassword: process.env['POSTGRES_PASSWORD'],
  postgresDb: process.env['POSTGRES_DB'],
  postgresHost: process.env['POSTGRES_HOST'],
  postgresSchema: process.env['POSTGRES_SCHEMA'],
  jwtSecret: process.env['JWT_SECRET'],
  jwtExpires: process.env['JWT_EXPIRES'],
}));
