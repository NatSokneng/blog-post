import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryRepository } from "./reposities/category.reposity";
@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoryRepository: CategoryRepository
    ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.save(createCategoryDto);
    return category;
  }

   async allCategories() {
    return await this.categoryRepository.find();
  }

  async categoriesDetail(id: number) {
   return await this.categoryRepository.findOne({where: {id:id}});
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update({ id }, updateCategoryDto);
    return await this.categoryRepository.findOne({ id });
  }

  async deleteCategory(id: number) {
   const deleteCategory = await this.categoryRepository.delete({ id });
   return deleteCategory;
  }
}
