import { CategoryEntity } from "src/categories/entities/category.entity";
import { TagEntity } from "src/tag/entities/tag.entity";
import { Entity, Column, ManyToMany, OneToMany } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";
@Entity('Post')
export class PostEntity extends BaseEntity {

    @Column()
    public title: string;

    @ManyToMany(() => CategoryEntity, category => category.post)
    category: CategoryEntity[];

    @OneToMany(() => TagEntity, tag => tag.post)
    tag: TagEntity;

}

