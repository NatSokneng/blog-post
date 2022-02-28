import { Module } from "@nestjs/common";
import { TagService } from "./tag.service";
import { TagController } from "./tag.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagRepository } from "./repository/tag.repository";
import { PostRepository } from "src/post/repositories/post.repository";

@Module({
  imports: [TypeOrmModule.forFeature([TagRepository, PostRepository])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
