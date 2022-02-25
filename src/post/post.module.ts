import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostRepository } from "./repositories/post.repository";
import { CategoryRepository } from "src/categories/reposities/category.reposity";
@Module({
  imports: [TypeOrmModule.forFeature([PostRepository, CategoryRepository])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
