import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmConfigService } from "./configurations/database.configuration";
import { AuthController } from "./auth/auth.contoller";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { CategoriesModule } from "./categories/categories.module";
import { PostModule } from "./post/post.module";
import { TagModule } from "./tag/tag.module";
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    CategoriesModule,
    PostModule,
    TagModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [UsersService],
})
export class AppModule {}
