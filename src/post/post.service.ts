import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "src/categories/reposities/category.reposity";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostRepository } from "./repositories/post.repository";
import { PostEntity } from "./entities/post.entity";
@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async create(createPostDto: CreatePostDto) {
    const postEntity = new PostEntity();
    postEntity.title = createPostDto.title;
    if (createPostDto.categoryIds) {
      const categories = await this.categoryRepository.findByIds(
        createPostDto.categoryIds
      );
      postEntity.categories = categories;
    }
    const post = await this.postRepository.save(postEntity);
    return post;
  }

  async findAll() {
    return await this.postRepository.getAllPost();
  }

  async findOne(id: number) {
    return await this.postRepository.getOneDetailByPostId(id);
  }
}
