import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { UserEntity } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { RegistrationRespModel } from "./egistration.resp.model";
@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneUserByEmail(email);
  }

  private async registrationValidation(createUserDto: CreateUserDto) {
    if (!createUserDto.firstName) {
      return "First name can't be empty";
    }
    if (!createUserDto.lastName) {
      return "Last name can't be empty";
    }
    if (!createUserDto.email) {
      return "Email can't be empty";
    }
    if (!createUserDto.password) {
      return "Password can't be empty";
    }

    const emailRule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRule.test(createUserDto.email.toLowerCase())) {
      return "Invalid email";
    }

    const user = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    if (user != null && user.email) {
      return "Email already exist";
    }
  }
  public async registerUser(createUserDto: CreateUserDto) {
    let register = new RegistrationRespModel();
    const errorMessage = await this.registrationValidation(createUserDto);
    if (errorMessage) {
      register.message = errorMessage;
      register.successStatus = false;
      return register;
    }
    const userEntity = new UserEntity();
    userEntity.firstName = createUserDto.firstName;
    userEntity.lastName = createUserDto.lastName;
    userEntity.email = createUserDto.email;
    userEntity.password = createUserDto.password;
    await this.userRepository.save(userEntity);
    register.successStatus = true;
    register.message = "Register is successfully";
    return register;
  }

  async findById(id: number) {
    return await this.userRepository.findOne(id);
  }

  async deleteUser(id: number) {
    const deleteUser = await this.userRepository.delete({ id });
    if (!deleteUser.affected) {
      throw new NotFoundException(`ID ${id} is not found`);
    }
  }
}
