import { Injectable, Request, Response, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dto/auth.login.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) 
    {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email)
    if (user && user.password == pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async validateUser(authLoginDto: AuthLoginDto): Promise<UserEntity> {
  //   const { email, password } = authLoginDto;
  //   const user = await this.usersService.findOneByEmail(authLoginDto);
  //   if (!(await user?.validatePassword(password))) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async login(authLoginDto: AuthLoginDto) {
  //   const user = await this.validateUser(authLoginDto)

  //   const payload = {
  //     userId: user.id
  //   };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

}
