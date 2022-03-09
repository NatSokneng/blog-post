import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]),
  JwtModule.register({
    secret: 'My random secret key never let others',
    signOptions: {
      expiresIn: '1h',
    },
  })
],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule {}
