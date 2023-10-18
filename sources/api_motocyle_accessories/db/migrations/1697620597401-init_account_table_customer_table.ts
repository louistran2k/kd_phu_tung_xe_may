import { MigrationInterface, QueryRunner } from "typeorm";

export class InitAccountTableCustomerTable1697620597401 implements MigrationInterface {
    name = 'InitAccountTableCustomerTable1697620597401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(50) NOT NULL, \`gender\` bit NULL, \`birthDate\` date NULL, \`address\` text NULL, \`phoneNumber\` varchar(10) NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`, \`email\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`refreshToken\` text NOT NULL, \`role\` enum ('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER', PRIMARY KEY (\`id\`, \`email\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_8536b8b85c06969f84f0c098b03\` FOREIGN KEY (\`email\`) REFERENCES \`accounts\`(\`email\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`accounts\` ADD CONSTRAINT \`FK_ee66de6cdc53993296d1ceb8aa0\` FOREIGN KEY (\`email\`) REFERENCES \`customers\`(\`email\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`accounts\` DROP FOREIGN KEY \`FK_ee66de6cdc53993296d1ceb8aa0\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_8536b8b85c06969f84f0c098b03\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
    }

}
