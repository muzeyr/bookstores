import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env['POSTGRES_HOST'],
      port: 5432,
      username: process.env['POSTGRES_USER'],
      database: process.env['POSTGRES_DB'],
      password: process.env['POSTGRES_PASSWORD'],
      schema: process.env['POSTGRES_SCHEMA'],
      entities: [],
      extra: {
        charset: 'utf8mb4',
      },
      synchronize: true,
      logging: false,
    };
  },
};
