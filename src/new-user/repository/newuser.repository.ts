import { EntityRepository, Repository } from "typeorm";
import { NewUserEntity } from "../entities/new-user.entity";

@EntityRepository(NewUserEntity)
export class NewUserRepository extends Repository<NewUserEntity> {
    async deleteNew(){
      const query = await this.createQueryBuilder('NewUser');
      query.select("NewUser.updatedAt", "updatedAt");
      query.withDeleted();
      query.getMany();
    }
}