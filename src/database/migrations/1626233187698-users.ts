import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1626233187698 implements MigrationInterface {
  name = 'users1626233187698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Estado_Usuario" ("id_estado_usuario" SERIAL NOT NULL, "nombre_estado_usuario" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_112197a32915d4e06a3c790d310" PRIMARY KEY ("id_estado_usuario"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Perfil_Usuario" ("id_perfil" SERIAL NOT NULL, "numero_preguntas" integer NOT NULL, "numero_respuestass" integer NOT NULL, CONSTRAINT "PK_3cfc938ed86ba92b47ceb5d1d90" PRIMARY KEY ("id_perfil"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Usuario" ("id_usuario" SERIAL NOT NULL, "correo_institucional" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "fecha_nacimiento" TIMESTAMP NOT NULL, "carrera" character varying NOT NULL, "facultad" character varying NOT NULL, "password" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, "estadoIdEstadoUsuario" integer, "perfil_usaurio" integer, CONSTRAINT "REL_1838c92a410dc0ca3ee5d2bc0c" UNIQUE ("perfil_usaurio"), CONSTRAINT "PK_bba91c47ac2937456c51de1d029" PRIMARY KEY ("id_usuario"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Usuario_Rol" ("id_usuario_rol" SERIAL NOT NULL, "usuarioIdUsuario" integer, "rolIdRol" integer, CONSTRAINT "PK_a901c2ed47f53edd90fb4c3197f" PRIMARY KEY ("id_usuario_rol"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Rol" ("id_rol" SERIAL NOT NULL, "nombre_rol" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_73d233526ce22d6e7fcaa12d7ec" PRIMARY KEY ("id_rol"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Accion" ("id_accion" SERIAL NOT NULL, "nombre_accion" character varying NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL, "ultima_actualizacion" TIMESTAMP NOT NULL, "rolIdRol" integer, CONSTRAINT "PK_6ff672b720767204a368b7b0a52" PRIMARY KEY ("id_accion"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario" ADD CONSTRAINT "FK_59aad25b130bb96053f1e24577a" FOREIGN KEY ("estadoIdEstadoUsuario") REFERENCES "Estado_Usuario"("id_estado_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario" ADD CONSTRAINT "FK_1838c92a410dc0ca3ee5d2bc0c6" FOREIGN KEY ("perfil_usaurio") REFERENCES "Perfil_Usuario"("id_perfil") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_6bd32ef459807e111fd58dd1736" FOREIGN KEY ("usuarioIdUsuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_d60bc6aebc3d08f969c79c19e52" FOREIGN KEY ("rolIdRol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Accion" ADD CONSTRAINT "FK_a76c416fd203cf67d9a9b6f69f8" FOREIGN KEY ("rolIdRol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Accion" DROP CONSTRAINT "FK_a76c416fd203cf67d9a9b6f69f8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_d60bc6aebc3d08f969c79c19e52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_6bd32ef459807e111fd58dd1736"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario" DROP CONSTRAINT "FK_1838c92a410dc0ca3ee5d2bc0c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Usuario" DROP CONSTRAINT "FK_59aad25b130bb96053f1e24577a"`,
    );
    await queryRunner.query(`DROP TABLE "Accion"`);
    await queryRunner.query(`DROP TABLE "Rol"`);
    await queryRunner.query(`DROP TABLE "Usuario_Rol"`);
    await queryRunner.query(`DROP TABLE "Usuario"`);
    await queryRunner.query(`DROP TABLE "Perfil_Usuario"`);
    await queryRunner.query(`DROP TABLE "Estado_Usuario"`);
  }
}
