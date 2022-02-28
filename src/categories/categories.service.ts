import { Injectable, NotFoundException } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryRepository } from "./reposities/category.reposity";
@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.save(createCategoryDto);
    return category;
  }

  async allCategories() {
    const categories = await this.categoryRepository.find();
    if(!categories) {
      throw new NotFoundException(`Not found`);
    }
    return categories;
  }

  async categoriesDetail(id: number) {
    const categoriesDetail = await this.categoryRepository.findOne({
      where: { id: id },
    });
    if (!categoriesDetail) {
      throw new NotFoundException(`ID ${id} not exist`);
    }
    // return this.categoryRepository.save(categoriesDetail);
    return await categoriesDetail;
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.categoryRepository.update(
      { id },
      updateCategoryDto
    );
    await this.categoryRepository.findOne({ id });
    if (!updateCategory.affected) {
      throw new NotFoundException(`ID ${id} not exist`);
    }
  }

  async deleteCategory(id: number) {
    const deleteCategory = await this.categoryRepository.delete({ id });
    if (!deleteCategory.affected) {
      throw new NotFoundException(`ID ${id} not exist`);
    }
  }
 
  /*
  async restoreDeletedCategory(id: number) {
    const restoreResponse = await this.categoryRepository.restore(id);
    if (!restoreResponse.affected) {
      throw new NotFoundException(`Category ID ${id} not restore`);
    }
  }
  */
}
