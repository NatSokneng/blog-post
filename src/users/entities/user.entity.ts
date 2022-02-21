import { Entity, Column, BeforeInsert } from "typeorm";
import { BaseEntity } from "../../generic/BaseEntity";
import * as bcrypt from 'bcrypt';

@Entity('User')
export class UserEntity extends BaseEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;
  
  @Column()
  @BeforeInsert()
  public password: string;
   async hashPassword() {
      this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
   }
  
}

