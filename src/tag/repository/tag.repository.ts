import { EntityRepository, Repository } from "typeorm";
import { TagEntity } from "../entities/tag.entity";

@EntityRepository(TagEntity)
export class TagRepository extends Repository<TagEntity>{
  findAllTag(){
    const query = this.createQueryBuilder("TagEntity");
    query.leftJoinAndSelect("TagEntity.posts", "Post")
    return query.getMany();
  }

  findTagBYId(id: number){
    const query = this.createQueryBuilder("TagEntity");
    query.leftJoinAndSelect("TagEntity.posts", "Post");
    query.where("TagEntity.id = :tagId", {tagId: id});
    return query.getOne();
  }

}