import {MigrationInterface, QueryRunner} from "typeorm";

export class usuario1627249062991 implements MigrationInterface {
    name = 'usuario1627249062991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "UQ_8a61df769d11c72b466928e781b" UNIQUE ("correoInstitucional")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "UQ_8a61df769d11c72b466928e781b"`);
    }

}
