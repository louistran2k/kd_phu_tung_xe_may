import { MigrationInterface, QueryRunner } from "typeorm";

export class InitAccountTableCustomerTable1697658611037 implements MigrationInterface {
    name = 'InitAccountTableCustomerTable1697658611037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`refreshToken\` text NOT NULL, \`role\` enum ('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER', PRIMARY KEY (\`email\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(50) NOT NULL, \`gender\` bit NULL, \`birthDate\` date NULL, \`address\` text NULL, \`phoneNumber\` varchar(10) NULL, \`accountEmail\` varchar(255) NULL, UNIQUE INDEX \`REL_2925412aa732227a7f48259a70\` (\`accountEmail\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_2925412aa732227a7f48259a709\` FOREIGN KEY (\`accountEmail\`) REFERENCES \`accounts\`(\`email\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_2925412aa732227a7f48259a709\``);
        await queryRunner.query(`DROP INDEX \`REL_2925412aa732227a7f48259a70\` ON \`customers\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
    }

}
