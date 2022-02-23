import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CategoryPost1645589701241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "CategoryPost",
        columns: [
          {
            name: "categoriesId",
            type: "int",
          },
          {
            name: "postsId",
            type: "int",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("CategoryPost");
  }
}
