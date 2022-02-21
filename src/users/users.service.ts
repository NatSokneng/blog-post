import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository
  ) {}

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

