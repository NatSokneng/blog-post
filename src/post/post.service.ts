import { Injectable, NotFoundException } from "@nestjs/common";
import { CategoryRepository } from "src/categories/reposities/category.reposity";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostRepository } from "./repositories/post.repository";
import { PostEntity } from "./entities/post.entity";
import { UpdatePostDto } from "./dto/update-post.dto";
@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async create(createPostDto: CreatePostDto) {
    const postEntity = new PostEntity();
    postEntity.title = createPostDto.title;
    const categories = await this.categoryRepository.findByIds(
      createPostDto.categoryIds
    );
    postEntity.categories = categories;
    const post = await this.postRepository.save(postEntity);
    return post;
  }

  async findAll() {
    return await this.postRepository.getAllPost();
  }

  async DetailPost(id: number) {
    const DetailPost = await this.postRepository.getOneDetailByPostId(id);
    if (!DetailPost) {
      throw new NotFoundException(`Post ID ${id} is not found`);
    }
    return this.postRepository.save(DetailPost);
  }

  async deletePost(id: number) {
    return await this.postRepository.delete({id});
  }
  async updatePost(id: number, updatePostDto: UpdatePostDto){
     await this.postRepository.update({id}, updatePostDto);
     return await this.postRepository.findOne({id});
  }
}
