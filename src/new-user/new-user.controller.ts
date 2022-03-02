import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { NewUserService } from "./new-user.service";
import { CreateNewUserDto } from "./dto/create-new-user.dto";
import { UpdateNewUserDto } from "./dto/update-new-user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("new-user")
export class NewUserController {
  constructor(private newUserService: NewUserService) {}

  @UseGuards(JwtAuthGuard)
  @Post("/")
  async createLogin(@Body() createNewUserDto: CreateNewUserDto) {
    const newUser = await this.newUserService.create(createNewUserDto);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Create new user is successfully",
      newUser,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllNewUser() {
    const allNewUser = await this.newUserService.findAllNewUser();
    return {
      StatusCode: HttpStatus.OK,
      Message: "All New User",
      allNewUser,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findNewUser(@Param("id") id: string) {
    const userDetail = await this.newUserService.findNewUserById(+id);
    return {
      StatusCode: HttpStatus.OK,
      Message: "New user is ",
      userDetail,
    };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNewUserDto: UpdateNewUserDto) {
    return this.newUserService.update(+id, updateNewUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async deleteNewUser(@Param("id") id: string) {
    const newUser = await this.newUserService.deleteNewUser(+id);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Deleted is successfully",
      newUser,
    };
  }
}
