import { MigrationInterface, QueryRunner } from "typeorm"

export class Orders1688953860706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "status" "public"."orders_status_enum" NOT NULL DEFAULT 'Recebido', "paymentStatus" "public"."orders_paymentstatus_enum" NOT NULL DEFAULT 'Aguardando pagamento', "totalPrice" numeric(15,2) NOT NULL, "customer_id" integer, CONSTRAINT "PK_ORDERS" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_CUSTOMER_ID" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_CUSTOMER_ID"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
