import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PostTag1645590234104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
                name: "Post_Tag",
                columns: [
                    {
                        name: "postId",
                        type: "varchar(200)",
                    },
                    {
                        name: "tagId",
                        type: "varchar(200)",
                    },
                ]
            }), true)
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("Post_Tag");
        }
}

   


