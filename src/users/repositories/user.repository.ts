import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    findOneUserByEmail(email: string) {
      const query = this.createQueryBuilder("User");
      query.where("User.email = :email", { email });
      return query.getOne();
    }
}
