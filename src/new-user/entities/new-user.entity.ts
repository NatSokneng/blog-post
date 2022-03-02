import { Column, BeforeInsert, Entity } from "typeorm";
import { BaseEntity } from "src/generic/BaseEntity";
import * as bcrypt from "bcrypt";

@Entity('NewUser')
export class NewUserEntity extends BaseEntity {
  @Column({
    unique: true,
    length: 200,
  })
  email: string;

  @Column({
    length: 25,
  })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
