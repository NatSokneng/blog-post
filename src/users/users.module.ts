import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [
    UsersController,
    UsersService,
  ],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule {}
