import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PostTag1645590234104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "PostTag",
        columns: [
          {
            name: "postsId",
            type: "int",
          },
          {
            name: "tagsId",
            type: "int",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("PostTag");
  }
}
