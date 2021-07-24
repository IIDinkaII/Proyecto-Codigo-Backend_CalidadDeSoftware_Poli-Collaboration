import {MigrationInterface, QueryRunner} from "typeorm";

export class serialize1627098312005 implements MigrationInterface {
    name = 'serialize1627098312005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "fechaCreacion"`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "fechaCreacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "ultimaActualizacion"`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "ultimaActualizacion" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "ultimaActualizacion"`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "ultimaActualizacion" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "fechaCreacion"`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "fechaCreacion" TIMESTAMP NOT NULL`);
    }

}
