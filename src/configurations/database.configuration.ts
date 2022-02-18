import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigurationService } from "./enviroment.configuration";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const configService = new ConfigurationService();
    return {
      type: configService.get('DB_DRIVER'),
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      logging: configService.get('DB_LOGGING'),
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    };
  }
}