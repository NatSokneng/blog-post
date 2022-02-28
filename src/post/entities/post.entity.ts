import { type } from "os";
import { CategoryEntity } from "src/categories/entities/category.entity";
import { TagEntity } from "src/tag/entities/tag.entity";
import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";
@Entity("Post")
export class PostEntity extends BaseEntity {
  @Column()
  public title: string;

  @ManyToMany((type) => CategoryEntity, (category) => category.posts)
  @JoinTable({
    name: "CategoryPost",
    joinColumn: {
      name: "postId",
    },
    inverseJoinColumn: {
      name: "categoryId",
    },
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.posts)
  tags: TagEntity[];
}
