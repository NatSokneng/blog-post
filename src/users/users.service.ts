import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export type User = any;
@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository
  ) {}
  
async findOneByEmail(email: string) {
  return await this.userRepository.findOneUserByEmail(email);
}

async create(createUserDto: CreateUserDto) {
  const userEntity = new UserEntity();
  userEntity.firstName = createUserDto.firstName;
  userEntity.lastName = createUserDto.lastName;
  userEntity.email = createUserDto.email;
  userEntity.password = createUserDto.password;
  const user = await this.userRepository.save(userEntity);
  return user;
}
  
}

