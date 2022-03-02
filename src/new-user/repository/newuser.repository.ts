import { EntityRepository, Repository } from "typeorm";
import { NewUserEntity } from "../entities/new-user.entity";

@EntityRepository(NewUserEntity)
export class NewUserRepository extends Repository<NewUserEntity> {

}