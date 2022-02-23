import { Column, PrimaryColumn } from "typeorm";

export class BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
