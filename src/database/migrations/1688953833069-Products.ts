import { MigrationInterface, QueryRunner } from "typeorm"

export class Products1688953833069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "price" numeric(15,2) NOT NULL, "category_id" integer, CONSTRAINT "PK_PRODUCTS" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_CATEGORY_ID" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_CATEGORY_ID"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
