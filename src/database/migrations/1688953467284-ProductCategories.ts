import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductCategories1688953467284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_categories" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_PRODUCT_CATEGORIES" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_categories"`);
    }

}
