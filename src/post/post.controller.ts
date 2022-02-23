import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postService.create(createPostDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Post is successfully",
      post,
    };
  }

  @Get()
  async findAll() {
    const allPosts = await this.postService.findAll()
    return {
      statusCode: HttpStatus.OK,
      message: 'All post ',
      allPosts
    };
  }
}
