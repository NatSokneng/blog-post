import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './configurations/database.configuration';
import { AuthController } from './auth/auths.contoller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
      ConfigModule.forRoot(),
      AuthModule,
      UsersModule
    ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
