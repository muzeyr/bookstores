import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { AppConfigService } from './app';

//jdbc:postgresql://localhost:5032/postgres
export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: AppConfigService) => {
    console.log(configService.postgresHost);
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5032,
      username: 'postgres',
      database: 'postgres',
      password: 'xk8P0shNlmRvrQu',
      schema: 'eadam',
      entities: [],
      extra: {
        charset: 'utf8mb4',
      },
      synchronize: true,
      logging: false,
    };
  },
};
