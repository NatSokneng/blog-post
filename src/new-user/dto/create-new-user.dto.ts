import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateNewUserDto {
  @IsEmail()
  @Length(200)
  email: string;

  @IsNotEmpty()
  @Length(8, 25)
  password: string;
}
