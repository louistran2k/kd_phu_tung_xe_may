import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProductProductGroupProductType1697473656043 implements MigrationInterface {
    name = 'AddProductProductGroupProductType1697473656043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "motorcycles" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_6e34aca06f3000916257494a4aa" DEFAULT NEWSEQUENTIALID(), CONSTRAINT "PK_6e34aca06f3000916257494a4aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_groups" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_bccc8805f3453d0cce77c1beedb" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_bccc8805f3453d0cce77c1beedb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_types" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_6ad7b08e6491a02ebc9ed82019d" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_6ad7b08e6491a02ebc9ed82019d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_0806c755e0aca124e67c0cf6d7d" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "images" nvarchar(255) NOT NULL, "unit" nvarchar(255) NOT NULL, "quantityInStock" int NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_types"`);
        await queryRunner.query(`DROP TABLE "product_groups"`);
        await queryRunner.query(`DROP TABLE "motorcycles"`);
    }

}
