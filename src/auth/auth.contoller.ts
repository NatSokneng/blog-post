import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Param,
  /*
  Request,
  Res,
  UseFilters,
  */
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { AuthLoginDto } from "./dto/auth.login.dto";
//import { AuthExceptionFilter } from './auth-exceptions.filter';
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post("v1/register")
  async createLogin(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Create user is successfully",
      user,
    };
  }

  @Post("v1/login")
  async login(@Body() loginDto: AuthLoginDto) {
    const login = await this.authService.login(loginDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Login is successfully",
      login,
    };
  }

  @Get(":id")
  async show(@Param("id") id: string) {
    const user = await this.userService.findById(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "Fine user by Id",
      user,
    };
  }

  /*
  @UseFilters(AuthExceptionFilter)
  @Get('/logout')
  async logout(@Request() req, @Res()  Response) {
    req.logout();
    Response.redirect('/')
  }
*/
  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    const deleteUser = await this.userService.deleteUser(+id);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Delete is successfully",
      deleteUser,
    };
  }
}
