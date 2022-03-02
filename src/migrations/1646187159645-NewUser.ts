import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class NewUser1646187159645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "NewUser",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "email",
                  type: "varchar(200)",
                  isUnique: true
                },
                {
                  name: "password",
                  type: "varchar(250)",
                },
                {
                  name: "createdAt",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updatedAt",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            }),
            true
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("NewUser");
    }

}
