import { IsNotEmpty } from "class-validator";

export class CreateTagDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  postId: number[]
}

