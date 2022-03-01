import {
  Controller,
  UseGuards,
  Get,
  Request,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("v1/profile")
  async getProfile(@Request() req) {
    return await this.usersService.findById(req.userId);
  }
}
