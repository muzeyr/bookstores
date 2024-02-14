import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AppConfigService,
  AppConfigServiceInterface,
} from './configuration.service';
import configuration from './configuration';
import Joi from 'joi';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_SCHEMA: Joi.string().required(),
        REDIS_URL: Joi.string().required(),
        REDIS_DB: Joi.string().required(),
        REDIS_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    ConfigService,
    {
      provide: AppConfigServiceInterface,
      useClass: AppConfigService,
    },
    AppConfigService,
  ],
  exports: [ConfigService, AppConfigServiceInterface, AppConfigService],
})
export class AppConfigModule {}
