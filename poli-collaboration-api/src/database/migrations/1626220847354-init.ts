import {MigrationInterface, QueryRunner} from "typeorm";

export class init1626220847354 implements MigrationInterface {
    name = 'init1626220847354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "nombre" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "nombre"`);
    }

}
