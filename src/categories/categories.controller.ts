import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const categories = await this.categoriesService.create(createCategoryDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Category create is successfully",
      categories,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const allCategories = await this.categoriesService.allCategories()
    return {
      statusCode: HttpStatus.OK,
      message: "All categories is ...",
      allCategories
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    const categoryId = await this.categoriesService.categoriesDetail(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "Category ID is...",
      categoryId
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(@Param("id") id: string,  @Body() updateCategoryDto: UpdateCategoryDto){
    const update = await this.categoriesService.updateCategory(+id, updateCategoryDto);
    return {
      statusCode: HttpStatus.OK,
      message: "Category update is successfully",
      update
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async deleteCategory(@Param("id") id: string) {
    const deleteCategory = await this.categoriesService.deleteCategory(+id);
    return {
      statusCode: HttpStatus.OK,
      message: "Delete category is successfully",
      deleteCategory,
    };
  }
}
