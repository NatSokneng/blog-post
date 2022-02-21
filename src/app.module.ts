import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './configurations/database.configuration';
import { AuthController } from './auth/auths.contoller';
import { UsersService } from './users/users.service';

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
  providers: [ UsersService],
})
export class AppModule {}
