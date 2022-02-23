import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CategoryPost1645589701241 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Category_Post",
            columns: [
                {
                    name: "categoryId",
                    type: "varchar(200)",
                },
                {
                    name: "postId",
                    type: "varchar(200)",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Category_Post");
    }

}
