import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductOders1688954208231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_orders" ("product_id" integer NOT NULL, "order_id" integer NOT NULL, CONSTRAINT "PK_PRODUCT_ORDERS" PRIMARY KEY ("product_id", "order_id"))`);
        await queryRunner.query(`ALTER TABLE "product_order" ADD CONSTRAINT "FK_PRODUCT_ID" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_order" ADD CONSTRAINT "FK_ORDER_ID" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_order" DROP CONSTRAINT "FK_PRODUCT_ID"`);
        await queryRunner.query(`ALTER TABLE "product_order" DROP CONSTRAINT "FK_ORDER_ID"`);
        await queryRunner.query(`DROP TABLE "product_orders"`);
    }

}
