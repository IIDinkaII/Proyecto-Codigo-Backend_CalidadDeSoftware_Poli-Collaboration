import {MigrationInterface, QueryRunner} from "typeorm";

export class nombresColumnas1626236098442 implements MigrationInterface {
    name = 'nombresColumnas1626236098442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_59aad25b130bb96053f1e24577a"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_1838c92a410dc0ca3ee5d2bc0c6"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_6bd32ef459807e111fd58dd1736"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_d60bc6aebc3d08f969c79c19e52"`);
        await queryRunner.query(`ALTER TABLE "Accion" DROP CONSTRAINT "FK_a76c416fd203cf67d9a9b6f69f8"`);
        await queryRunner.query(`ALTER TABLE "Accion" RENAME COLUMN "rolIdRol" TO "id_rol"`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" DROP COLUMN "numero_respuestass"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "estadoIdEstadoUsuario"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "REL_1838c92a410dc0ca3ee5d2bc0c"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "perfil_usaurio"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP COLUMN "usuarioIdUsuario"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP COLUMN "rolIdRol"`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" ADD "numero_respuestas" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" ADD "fecha_creacion" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" ADD "ultima_actualizacion" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "id_estado_usuario" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "id_perfil_usuario" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "UQ_83ac29ceb9152c38b65ca26ec75" UNIQUE ("id_perfil_usuario")`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD "id_usuario" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD "id_rol" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_9da6cf124fa63c4663e9a88d074" FOREIGN KEY ("id_estado_usuario") REFERENCES "Estado_Usuario"("id_estado_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_83ac29ceb9152c38b65ca26ec75" FOREIGN KEY ("id_perfil_usuario") REFERENCES "Perfil_Usuario"("id_perfil") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_c93eec7fc5d4172a581689bb543" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_392353c3a2327ce4c075830309f" FOREIGN KEY ("id_rol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Accion" ADD CONSTRAINT "FK_129644e5f5a9de75eafc4aded2e" FOREIGN KEY ("id_rol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Accion" DROP CONSTRAINT "FK_129644e5f5a9de75eafc4aded2e"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_392353c3a2327ce4c075830309f"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_c93eec7fc5d4172a581689bb543"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_83ac29ceb9152c38b65ca26ec75"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_9da6cf124fa63c4663e9a88d074"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP COLUMN "id_rol"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP COLUMN "id_usuario"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "UQ_83ac29ceb9152c38b65ca26ec75"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "id_perfil_usuario"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP COLUMN "id_estado_usuario"`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" DROP COLUMN "ultima_actualizacion"`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" DROP COLUMN "fecha_creacion"`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" DROP COLUMN "numero_respuestas"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD "rolIdRol" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD "usuarioIdUsuario" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "perfil_usaurio" integer`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "REL_1838c92a410dc0ca3ee5d2bc0c" UNIQUE ("perfil_usaurio")`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD "estadoIdEstadoUsuario" integer`);
        await queryRunner.query(`ALTER TABLE "Perfil_Usuario" ADD "numero_respuestass" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Accion" RENAME COLUMN "id_rol" TO "rolIdRol"`);
        await queryRunner.query(`ALTER TABLE "Accion" ADD CONSTRAINT "FK_a76c416fd203cf67d9a9b6f69f8" FOREIGN KEY ("rolIdRol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_d60bc6aebc3d08f969c79c19e52" FOREIGN KEY ("rolIdRol") REFERENCES "Rol"("id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_6bd32ef459807e111fd58dd1736" FOREIGN KEY ("usuarioIdUsuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_1838c92a410dc0ca3ee5d2bc0c6" FOREIGN KEY ("perfil_usaurio") REFERENCES "Perfil_Usuario"("id_perfil") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_59aad25b130bb96053f1e24577a" FOREIGN KEY ("estadoIdEstadoUsuario") REFERENCES "Estado_Usuario"("id_estado_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
