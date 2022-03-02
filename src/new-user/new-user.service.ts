import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNewUserDto } from "./dto/create-new-user.dto";
import { UpdateNewUserDto } from "./dto/update-new-user.dto";
import { NewUserEntity } from "./entities/new-user.entity";
import { NewUserRepository } from "./repository/newuser.repository";

@Injectable()
export class NewUserService {
  constructor(private newUserRepository: NewUserRepository) {
    console.log(newUserRepository);
  }
  async create(createNewUserDto: CreateNewUserDto) {
    try {
      const newUser = new NewUserEntity();
      newUser.email = createNewUserDto.email;
      newUser.password = createNewUserDto.password;
      const user = await this.newUserRepository.save(newUser);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async findAllNewUser() {
    const findAllNewUser = await this.newUserRepository.find();
    if (!findAllNewUser) {
      throw new NotFoundException(`Not found`);
    }
    return findAllNewUser;
  }

  async findNewUserById(id: number) {
    const userDetail = await this.newUserRepository.findOne({ id });
    if (!userDetail) {
      throw new NotFoundException(`ID ${id} is not found`);
    }
    return userDetail;
  }

  update(id: number, updateNewUserDto: UpdateNewUserDto) {
    return `This action updates a #${id} newUser`;
  }

  async deleteNewUser(id: number) {
    const deleteNewUser = await this.newUserRepository.delete({ id });
    if (!deleteNewUser.affected) {
      throw new NotFoundException(`Id ${id} is not found`);
    }
  }
}
