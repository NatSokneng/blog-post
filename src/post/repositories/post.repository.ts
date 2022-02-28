import { EntityRepository, Repository } from "typeorm";
import { PostEntity } from "../entities/post.entity";
@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  getOneDetailByPostId(id: number) {
    const query = this.createQueryBuilder("PostEntity");
    query.leftJoinAndSelect("PostEntity.categories", "Category");
    query.where("PostEntity.id = :postId", { postId: id });
    return query.getOne();
  }
  getAllPost() {
    const query = this.createQueryBuilder("PostEntity");
    query.leftJoinAndSelect("PostEntity.categories", "Category");
    return query.getMany();
  }
}
