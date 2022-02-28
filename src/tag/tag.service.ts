import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { TagEntity } from "./entities/tag.entity";
import { TagRepository } from "./repository/tag.repository";
import { PostRepository } from "src/post/repositories/post.repository";
@Injectable()
export class TagService {
  constructor(
    private tagRepository: TagRepository,
    private postRepository: PostRepository
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tagEntity = new TagEntity();
    tagEntity.content = createTagDto.content;
    const post = await this.postRepository.findByIds(createTagDto.postId);
    tagEntity.posts = post;
    const tag = await this.tagRepository.save(tagEntity);
    return tag;
  }

  async findAll() {
    const tags = await this.tagRepository.findAllTag();
    if(!tags) {
      throw new NotFoundException(`Not Found`);
    }
    return tags;
  }

  async findOne(id: number) {
    const tagId = await this.tagRepository.findTagBYId(id);
    if (!tagId) {
      throw new NotFoundException(`ID ${id} is not found`);
    }
    return tagId;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const updateTag = await this.tagRepository.update({ id }, updateTagDto);
    await this.tagRepository.findOne({ id });
    if (!updateTag.affected) {
      throw new NotFoundException(`ID ${id} not found`);
    }
  }

  async remove(id: number) {
    const deleteTagById = await this.tagRepository.delete({ id });
    if (!deleteTagById.affected) {
      throw new NotFoundException(`Tag ID ${id} is not found`);
    }
  }
}
