import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddCocumnUser1646793604734 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Test",
        columns: [
          {
            name: "name",
            type: "varchar(200)",
            isNullable: false
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
      
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Test");
  }
}
