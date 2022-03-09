import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { AuthLoginDto } from "./dto/auth.login.dto";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Account is invalid");
    }
    const matchPassword = await user.validatePassword(password);
    if (!matchPassword) {
      throw new UnauthorizedException("Password is invalid");
    }
    return user;
  }

  async login(authLoginDto: AuthLoginDto) {
    const { email, password } = authLoginDto;
    const user = await this.validateUser(email, password);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
