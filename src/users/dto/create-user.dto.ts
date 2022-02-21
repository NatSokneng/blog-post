import { IsEmail, IsNotEmpty } from 'class-validator';
import { BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';
//import { BaseEntity } from 'src/generic/BaseEntity';
export class CreateUserDto  {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @BeforeInsert()
  public password: string;
   async hashPassword() {
      this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
   }
  
}