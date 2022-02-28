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
    const posts = await this.postRepository.getAllPost();
    if (!posts) {
      throw new NotFoundException(`Not found`);
    }
    return posts;
  }

  async DetailPost(id: number) {
    const detailPost = await this.postRepository.getOneDetailByPostId(id);
    if (!detailPost) {
      throw new NotFoundException(`ID ${id} is not exist`);
    }
    return await detailPost;
  }

  async deletePost(id: number) {
    const deletePost = await this.postRepository.delete({ id });
    if (!deletePost.affected) {
      throw new NotFoundException(`ID ${id} not exist`);
    }
  }
  
  async updatePost(id: number, updatePostDto: UpdatePostDto) {
    const updatePost = await this.postRepository.update({ id }, updatePostDto);
    await this.postRepository.findOne({ id });
    if (!updatePost.affected) {
      throw new NotFoundException(`ID ${id} not exist`);
    }
  }
}
