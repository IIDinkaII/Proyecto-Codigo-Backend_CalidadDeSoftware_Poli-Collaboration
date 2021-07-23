import { MigrationInterface, QueryRunner } from 'typeorm';

export class denunciasEntities1626238817404 implements MigrationInterface {
  name = 'denunciasEntities1626238817404';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Publicacion" ("id_publicacion" SERIAL NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, "id_usuario" integer, CONSTRAINT "PK_ac5b6f033553980303f3cc9eb6f" PRIMARY KEY ("id_publicacion"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Denuncia" ("id_denuncia" SERIAL NOT NULL, "modo_canal" character varying NOT NULL, "telefono_contacto" character varying NOT NULL, "estado" character varying NOT NULL, "tipo_denuncia" character varying NOT NULL, "descripcion_hechos" character varying NOT NULL, "adjunto" character varying NOT NULL, "id_publicacion" integer, CONSTRAINT "REL_2ade5ed070b762abead3a4a477" UNIQUE ("id_publicacion"), CONSTRAINT "PK_a79865877e053e6304c480ff557" PRIMARY KEY ("id_denuncia"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Revision" ("id_revision" SERIAL NOT NULL, "observacion" character varying NOT NULL, "fecha_gestion" TIMESTAMP NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "fecha_actualizacion" TIMESTAMP NOT NULL, "id_publicacion" integer, CONSTRAINT "REL_3bce1611fc5f038a8490a7198b" UNIQUE ("id_publicacion"), CONSTRAINT "PK_9659e10aa8bb71d6c4f23f4a8ad" PRIMARY KEY ("id_revision"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Reporte_Denuncia" ("id_reporte_denuncia" SERIAL NOT NULL, "id_denuncia" character varying NOT NULL, "acciones_tomadas" character varying NOT NULL, "responsables" character varying NOT NULL, "evidencia" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, "id_revision" integer, CONSTRAINT "REL_cd81250fbbe04b7f7e8268e562" UNIQUE ("id_revision"), CONSTRAINT "PK_78f25be8e4dd7f79e0301788aad" PRIMARY KEY ("id_reporte_denuncia"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Publicacion" ADD CONSTRAINT "FK_2b5e87888541a6707aa6da5bc44" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Denuncia" ADD CONSTRAINT "FK_2ade5ed070b762abead3a4a4778" FOREIGN KEY ("id_publicacion") REFERENCES "Publicacion"("id_publicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Revision" ADD CONSTRAINT "FK_3bce1611fc5f038a8490a7198ba" FOREIGN KEY ("id_publicacion") REFERENCES "Publicacion"("id_publicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Reporte_Denuncia" ADD CONSTRAINT "FK_cd81250fbbe04b7f7e8268e5625" FOREIGN KEY ("id_revision") REFERENCES "Revision"("id_revision") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Reporte_Denuncia" DROP CONSTRAINT "FK_cd81250fbbe04b7f7e8268e5625"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Revision" DROP CONSTRAINT "FK_3bce1611fc5f038a8490a7198ba"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Denuncia" DROP CONSTRAINT "FK_2ade5ed070b762abead3a4a4778"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Publicacion" DROP CONSTRAINT "FK_2b5e87888541a6707aa6da5bc44"`,
    );
    await queryRunner.query(`DROP TABLE "Reporte_Denuncia"`);
    await queryRunner.query(`DROP TABLE "Revision"`);
    await queryRunner.query(`DROP TABLE "Denuncia"`);
    await queryRunner.query(`DROP TABLE "Publicacion"`);
  }
}
