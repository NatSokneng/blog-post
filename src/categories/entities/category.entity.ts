import { PostEntity } from "src/post/entities/post.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";

@Entity('Category')
export class CategoryEntity extends BaseEntity {

    @Column()
    public name: string;

    @Column()
    public description: string;

    @OneToMany(() => PostEntity,  post=> post.category)
    post: PostEntity[];

}


