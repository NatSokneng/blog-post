//import { PostEntity } from "src/post/entities/post.entity";
import { Entity, Column, /*ManyToMany, JoinTable*/ } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";

@Entity("Tag")
export class TagEntity extends BaseEntity {
  @Column()
  public content: string;

//   @ManyToMany(() => PostEntity, (post) => post.tags)
//   @JoinTable()
//   posts: PostEntity[];
 }
