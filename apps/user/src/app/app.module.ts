import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '@eadam/libs/config';
@Module({
  imports: [TypeOrmModule.forRootAsync(typeormConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
