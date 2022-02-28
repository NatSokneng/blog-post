import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from "@nestjs/common";
import { TagService } from "./tag.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
@Controller("tag")
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTagDto: CreateTagDto) {
    const tag = await this.tagService.create(createTagDto);
    return {
      StatusCode: HttpStatus.OK,
      message: " Created is successfully",
      tag,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const getAllTag = await this.tagService.findAll();
    return {
      StatusCode: HttpStatus.OK,
      Message: "All  tag is... ",
      getAllTag,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const tagId = await this.tagService.findOne(+id);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Detail is ID:  ",
      tagId,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
    const updateTag = await this.tagService.update(+id, updateTagDto);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Update is Successfully",
      updateTag,
    };
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const deleteTag = await this.tagService.remove(+id);
    return {
      StatusCode: HttpStatus.OK,
      Message: "Delete is successfully",
      deleteTag,
    };
  }
}
