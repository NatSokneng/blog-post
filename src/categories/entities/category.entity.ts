import { PostEntity } from "src/post/entities/post.entity";
import { Entity, Column, ManyToMany } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";

@Entity("Category")
export class CategoryEntity extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @ManyToMany(() => PostEntity, post => post.categories)
  posts: PostEntity[];
}
