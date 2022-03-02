import { Module } from '@nestjs/common';
import { NewUserService } from './new-user.service';
import { NewUserController } from './new-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewUserRepository } from './repository/newuser.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NewUserRepository])],
  controllers: [NewUserController],
  providers: [NewUserService]
})
export class NewUserModule {}
