import { Controller, Get, Post, Request, UseGuards, Body, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import {  Response } from 'express';
import { AuthLoginDto } from './dto/auth.login.dto';
//import { AuthExceptionFilter } from './auth-exceptions.filter';
@Controller('auth')
//@UseFilters(AuthExceptionFilter)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post('v1/register')
  async createLogin(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Create user is successfully',
      user
    };
  }
  
  @UseGuards(LocalAuthGuard)
  @Post('v1/login')
  async login(@Request() req) {
    const login = await this.authService.login(req.user);
    return {
      statusCode: HttpStatus.OK,
      message: 'Login is successfully',
      login
    };
  }
  // @UseGuards(JwtAuthGuard)
  // @Post('v1/log/out')
  // async logOut(@Req() request: AuthLoginDto, @Res() response: Response) {
  //   response.setHeader('Set-Cookie', this.userService.getCookieForLogOut());
  //   return response.sendStatus(200);
  // }
  
  @UseGuards(JwtAuthGuard)
  @Get('v1/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const user = await this.userService.findById(+id)
    return {
      statusCode: HttpStatus.OK,
      message: 'Fine user by Id',
      user
    };
  }
}
