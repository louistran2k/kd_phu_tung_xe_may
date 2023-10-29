import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAccountResfreshToken1698203986307 implements MigrationInterface {
    name = 'UpdateAccountResfreshToken1698203986307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "refreshToken" nvarchar(MAX)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "refreshToken" nvarchar(MAX) NOT NULL`);
    }

}
