import { MigrationInterface, QueryRunner } from 'typeorm';

export class categoriaPregunta1626402343721 implements MigrationInterface {
  name = 'categoriaPregunta1626402343721';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Categoria_Pregunta" ("id_categoria_pregunta" SERIAL NOT NULL, "nombre_categoria" character varying NOT NULL, "descripcion" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_00ace929115abe174a98595df05" PRIMARY KEY ("id_categoria_pregunta"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Pregunta" ("id_pregunta" SERIAL NOT NULL, "titulo" character varying NOT NULL, "contenido" character varying NOT NULL, "estado" character varying NOT NULL, "id_publicacion" integer, "id_categoria_pregunta" integer, CONSTRAINT "REL_8a05e7f7486e5bc3a21a7004af" UNIQUE ("id_publicacion"), CONSTRAINT "PK_dfbdc73cd98e743bb2683206f72" PRIMARY KEY ("id_pregunta"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Respuesta" ("id_respuesta" SERIAL NOT NULL, "titulo" character varying NOT NULL, "contenido" character varying NOT NULL, "estado" character varying NOT NULL, "id_pregunta" integer, "id_usuario" integer, CONSTRAINT "PK_81e09313a06d13b6c7bff23e5b5" PRIMARY KEY ("id_respuesta"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Evento" ("id_evento" SERIAL NOT NULL, "titulo_evento" character varying NOT NULL, "orginazador" character varying NOT NULL, "date_time_evento" TIMESTAMP NOT NULL, "descripcion" character varying NOT NULL, "estado" character varying NOT NULL, "numero_interesados" integer NOT NULL, "fecha_expiracion" TIMESTAMP NOT NULL, "id_publicacion" integer, "id_categoria" integer, CONSTRAINT "REL_7e92772666c2974e7bed98c027" UNIQUE ("id_publicacion"), CONSTRAINT "PK_13baa1fb960021fcaf95678b607" PRIMARY KEY ("id_evento"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Categoria_Evento" ("id_categoria_evento" SERIAL NOT NULL, "nombre_categoria" character varying NOT NULL, "descripcion" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_9a756b226fd6827f6d52a9a3bf8" PRIMARY KEY ("id_categoria_evento"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pregunta" ADD CONSTRAINT "FK_8a05e7f7486e5bc3a21a7004af4" FOREIGN KEY ("id_publicacion") REFERENCES "Publicacion"("id_publicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pregunta" ADD CONSTRAINT "FK_085e9e3486ffcdf01d46e49be97" FOREIGN KEY ("id_categoria_pregunta") REFERENCES "Categoria_Pregunta"("id_categoria_pregunta") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Respuesta" ADD CONSTRAINT "FK_82fe64ff4350a829c95ecbe2d7b" FOREIGN KEY ("id_pregunta") REFERENCES "Pregunta"("id_pregunta") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Respuesta" ADD CONSTRAINT "FK_be844791beb2036666cb6ad63a5" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Evento" ADD CONSTRAINT "FK_7e92772666c2974e7bed98c0271" FOREIGN KEY ("id_publicacion") REFERENCES "Publicacion"("id_publicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Evento" ADD CONSTRAINT "FK_4c98a57c3d9a25a388190cf174b" FOREIGN KEY ("id_categoria") REFERENCES "Categoria_Evento"("id_categoria_evento") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Evento" DROP CONSTRAINT "FK_4c98a57c3d9a25a388190cf174b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Evento" DROP CONSTRAINT "FK_7e92772666c2974e7bed98c0271"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Respuesta" DROP CONSTRAINT "FK_be844791beb2036666cb6ad63a5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Respuesta" DROP CONSTRAINT "FK_82fe64ff4350a829c95ecbe2d7b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pregunta" DROP CONSTRAINT "FK_085e9e3486ffcdf01d46e49be97"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pregunta" DROP CONSTRAINT "FK_8a05e7f7486e5bc3a21a7004af4"`,
    );
    await queryRunner.query(`DROP TABLE "Categoria_Evento"`);
    await queryRunner.query(`DROP TABLE "Evento"`);
    await queryRunner.query(`DROP TABLE "Respuesta"`);
    await queryRunner.query(`DROP TABLE "Pregunta"`);
    await queryRunner.query(`DROP TABLE "Categoria_Pregunta"`);
  }
}
