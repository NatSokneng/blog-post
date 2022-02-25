import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
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
    const allPosts = await this.postService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: "All post ",
      allPosts,
    };
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    const userId = await this.postService.DetailPost(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "User ID",
      userId,
    };
  }

  @Delete(":id")
  async deletePost(@Param("id") id: string) {
    const deletePost = await this.postService.deletePost(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "Post Delete is successfully",
      deletePost,
    };
  }

  @Patch(":id")
  async updatePost(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto){
    const updatePost = await this.postService.updatePost(+id, updatePostDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Post update is successfully",
      updatePost,
    };
  }
}
