import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";

@Entity('User')
export class UserEntity extends BaseEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;
  
  @Column({ nullable: false })
  public password: string;
  
}

