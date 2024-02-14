import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export abstract class AppConfigServiceInterface {
  readonly postgresUser: string;
  readonly postgresPassword: string;
  readonly postgresDatabase: string;
  readonly postgresHost: string;
  readonly jwtSecret: string;
  readonly jwtExpires: string;
}

@Injectable()
export class AppConfigService implements AppConfigServiceInterface {
  constructor(private configService: ConfigService) {}

  get postgresUser(): string {
    return this.getConfigValue('app.postgresUser');
  }
  get postgresPassword(): string {
    //return this.getConfigValue('app.postgresPassword');
    return 'xk8P0shNlmRvrQu';
  }

  get postgresSchema(): string {
    //return this.getConfigValue('app.postgresSchema');
    return 'eadam';
  }

  get postgresDatabase(): string {
    //return this.getConfigValue('app.postgresDatabase');
    return 'postgres';
  }

  get postgresHost(): string {
    return 'localhost';
    //return this.getConfigValue('app.postgresHost');
  }

  get jwtSecret(): string {
    return this.getConfigValue('app.jwtSecret');
  }

  get jwtExpires(): string {
    return this.getConfigValue('app.jwtExpires');
  }
  private getConfigValue(key: string): string {
    const value = this.configService.get<string>(key);
    if (typeof value === 'undefined') {
      throw new Error(`${key} is not defined in the configuration.`);
    }
    return value;
  }
}
