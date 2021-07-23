import {MigrationInterface, QueryRunner} from "typeorm";

export class camelCaseEntities1627081866510 implements MigrationInterface {
    name = 'camelCaseEntities1627081866510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Estado_Usuario" ("idEstadoUsuario" SERIAL NOT NULL, "nombreEstadoUsuario" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_e00d2c9d42c9178c9a0c74ec94b" PRIMARY KEY ("idEstadoUsuario"))`);
        await queryRunner.query(`CREATE TABLE "Perfil_Usuario" ("idPerfil" SERIAL NOT NULL, "numeroPreguntas" integer NOT NULL, "numeroRespuestas" integer NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_20052ef4e8eca346f427dfb7301" PRIMARY KEY ("idPerfil"))`);
        await queryRunner.query(`CREATE TABLE "Publicacion" ("idPublicacion" SERIAL NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, "idUsuario" integer, CONSTRAINT "PK_4c0afcd04b4eb34d18d1c99868a" PRIMARY KEY ("idPublicacion"))`);
        await queryRunner.query(`CREATE TABLE "Categoria_Pregunta" ("idCategoriaPregunta" SERIAL NOT NULL, "nombreCategoria" character varying NOT NULL, "descripcion" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_2ee1daf8df0e1713a6ffabcb681" PRIMARY KEY ("idCategoriaPregunta"))`);
        await queryRunner.query(`CREATE TABLE "Pregunta" ("idPregunta" SERIAL NOT NULL, "titulo" character varying NOT NULL, "contenido" character varying NOT NULL, "estado" character varying NOT NULL, "idPublicacion" integer, "idCategoriaPregunta" integer, CONSTRAINT "REL_68fc7b7f6e29014d6b188939ca" UNIQUE ("idPublicacion"), CONSTRAINT "PK_d607e309ee624f2ca025bcae1dc" PRIMARY KEY ("idPregunta"))`);
        await queryRunner.query(`CREATE TABLE "Respuesta" ("idRespuesta" SERIAL NOT NULL, "titulo" character varying NOT NULL, "contenido" character varying NOT NULL, "estado" character varying NOT NULL, "idPregunta" integer, "idUsuario" integer, CONSTRAINT "PK_91ac770540173904cd76924fe6b" PRIMARY KEY ("idRespuesta"))`);
        await queryRunner.query(`CREATE TABLE "Usuario" ("idUsuario" SERIAL NOT NULL, "correoInstitucional" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "fechaNacimiento" TIMESTAMP NOT NULL, "carrera" character varying NOT NULL, "facultad" character varying NOT NULL, "password" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, "idEstadoUsuario" integer, "idPerfilUsuario" integer, CONSTRAINT "REL_074603783beb9b228e7bcab2bd" UNIQUE ("idPerfilUsuario"), CONSTRAINT "PK_b7eceb38fdbcd4d575b20676d26" PRIMARY KEY ("idUsuario"))`);
        await queryRunner.query(`CREATE TABLE "Usuario_Rol" ("idUsuarioRol" SERIAL NOT NULL, "idUsuario" integer, "idRol" integer, CONSTRAINT "PK_19b999b6b74b0d29d381bcfe2b6" PRIMARY KEY ("idUsuarioRol"))`);
        await queryRunner.query(`CREATE TABLE "Rol" ("idRol" SERIAL NOT NULL, "nombreRol" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_fb7a15ff62033cf9ee4b09e2f36" PRIMARY KEY ("idRol"))`);
        await queryRunner.query(`CREATE TABLE "Accion" ("idAccion" SERIAL NOT NULL, "nombreAccion" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, "idRol" integer, CONSTRAINT "PK_d188b8b9e24a77436c19c5ba1ee" PRIMARY KEY ("idAccion"))`);
        await queryRunner.query(`CREATE TABLE "Denuncia" ("idDenuncia" SERIAL NOT NULL, "modoCanal" character varying NOT NULL, "telefonoContacto" character varying NOT NULL, "estado" character varying NOT NULL, "tipoDenuncia" character varying NOT NULL, "descripcionHechos" character varying NOT NULL, "adjunto" character varying NOT NULL, "idPublicacion" integer, CONSTRAINT "REL_2015b39d37519df0f18f5db6a8" UNIQUE ("idPublicacion"), CONSTRAINT "PK_556ba1816b1a131153cfbcbd6ab" PRIMARY KEY ("idDenuncia"))`);
        await queryRunner.query(`CREATE TABLE "Revision" ("idRevision" SERIAL NOT NULL, "observacion" character varying NOT NULL, "fechaGestion" TIMESTAMP NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "fechaActualizacion" TIMESTAMP NOT NULL, "idPublicacion" integer, CONSTRAINT "REL_3351bd8e2932f11c7d70c10abb" UNIQUE ("idPublicacion"), CONSTRAINT "PK_b8c3724332ac6ccfbe2d31f007c" PRIMARY KEY ("idRevision"))`);
        await queryRunner.query(`CREATE TABLE "Reporte_Denuncia" ("idReporteDenuncia" SERIAL NOT NULL, "idDenuncia" character varying NOT NULL, "accionesTomadas" character varying NOT NULL, "responsables" character varying NOT NULL, "evidencia" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, "idRevision" integer, CONSTRAINT "REL_55dccc5d66b82e45b89c63b71b" UNIQUE ("idRevision"), CONSTRAINT "PK_0d4ba1999751ca7fcca40e97b82" PRIMARY KEY ("idReporteDenuncia"))`);
        await queryRunner.query(`CREATE TABLE "Evento" ("idEvento" SERIAL NOT NULL, "tituloEvento" character varying NOT NULL, "organizador" character varying NOT NULL, "dateTimeEvento" TIMESTAMP NOT NULL, "descripcion" character varying NOT NULL, "estado" character varying NOT NULL, "numeroInteresados" integer NOT NULL, "fechaExpiracion" TIMESTAMP NOT NULL, "idPublicacion" integer, "idCategoria" integer, CONSTRAINT "REL_d399d2eef4104aba7908f62b83" UNIQUE ("idPublicacion"), CONSTRAINT "PK_205cd3b61de7bbf139e4b77d719" PRIMARY KEY ("idEvento"))`);
        await queryRunner.query(`CREATE TABLE "Categoria_Evento" ("idCategoriaEvento" SERIAL NOT NULL, "nombreCategoria" character varying NOT NULL, "descripcion" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, "ultimaActualizacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_fe7dd87b16acc3d5074ee1a1361" PRIMARY KEY ("idCategoriaEvento"))`);
        await queryRunner.query(`ALTER TABLE "Publicacion" ADD CONSTRAINT "FK_1961d0d9ce31f9887b22a1d0b53" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Pregunta" ADD CONSTRAINT "FK_68fc7b7f6e29014d6b188939cad" FOREIGN KEY ("idPublicacion") REFERENCES "Publicacion"("idPublicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Pregunta" ADD CONSTRAINT "FK_f34a049baf6e537fe5b4e3d661a" FOREIGN KEY ("idCategoriaPregunta") REFERENCES "Categoria_Pregunta"("idCategoriaPregunta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Respuesta" ADD CONSTRAINT "FK_519e992ca163a0970d68e5221a5" FOREIGN KEY ("idPregunta") REFERENCES "Pregunta"("idPregunta") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Respuesta" ADD CONSTRAINT "FK_4ca6f26be0b71bfb5a5181fb2e1" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_962b4a237e8753a64a81f8f20ec" FOREIGN KEY ("idEstadoUsuario") REFERENCES "Estado_Usuario"("idEstadoUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario" ADD CONSTRAINT "FK_074603783beb9b228e7bcab2bd4" FOREIGN KEY ("idPerfilUsuario") REFERENCES "Perfil_Usuario"("idPerfil") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_ef35f325bbc877b89a83a38c6ae" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" ADD CONSTRAINT "FK_bed847bcb931607848d6eb4a173" FOREIGN KEY ("idRol") REFERENCES "Rol"("idRol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Accion" ADD CONSTRAINT "FK_71ed03fe241b1eaaa8c72270f0e" FOREIGN KEY ("idRol") REFERENCES "Rol"("idRol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Denuncia" ADD CONSTRAINT "FK_2015b39d37519df0f18f5db6a8e" FOREIGN KEY ("idPublicacion") REFERENCES "Publicacion"("idPublicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Revision" ADD CONSTRAINT "FK_3351bd8e2932f11c7d70c10abb9" FOREIGN KEY ("idPublicacion") REFERENCES "Publicacion"("idPublicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Reporte_Denuncia" ADD CONSTRAINT "FK_55dccc5d66b82e45b89c63b71b5" FOREIGN KEY ("idRevision") REFERENCES "Revision"("idRevision") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Evento" ADD CONSTRAINT "FK_d399d2eef4104aba7908f62b830" FOREIGN KEY ("idPublicacion") REFERENCES "Publicacion"("idPublicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Evento" ADD CONSTRAINT "FK_aee25e2fb92a42023a1131e0fee" FOREIGN KEY ("idCategoria") REFERENCES "Categoria_Evento"("idCategoriaEvento") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Evento" DROP CONSTRAINT "FK_aee25e2fb92a42023a1131e0fee"`);
        await queryRunner.query(`ALTER TABLE "Evento" DROP CONSTRAINT "FK_d399d2eef4104aba7908f62b830"`);
        await queryRunner.query(`ALTER TABLE "Reporte_Denuncia" DROP CONSTRAINT "FK_55dccc5d66b82e45b89c63b71b5"`);
        await queryRunner.query(`ALTER TABLE "Revision" DROP CONSTRAINT "FK_3351bd8e2932f11c7d70c10abb9"`);
        await queryRunner.query(`ALTER TABLE "Denuncia" DROP CONSTRAINT "FK_2015b39d37519df0f18f5db6a8e"`);
        await queryRunner.query(`ALTER TABLE "Accion" DROP CONSTRAINT "FK_71ed03fe241b1eaaa8c72270f0e"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_bed847bcb931607848d6eb4a173"`);
        await queryRunner.query(`ALTER TABLE "Usuario_Rol" DROP CONSTRAINT "FK_ef35f325bbc877b89a83a38c6ae"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_074603783beb9b228e7bcab2bd4"`);
        await queryRunner.query(`ALTER TABLE "Usuario" DROP CONSTRAINT "FK_962b4a237e8753a64a81f8f20ec"`);
        await queryRunner.query(`ALTER TABLE "Respuesta" DROP CONSTRAINT "FK_4ca6f26be0b71bfb5a5181fb2e1"`);
        await queryRunner.query(`ALTER TABLE "Respuesta" DROP CONSTRAINT "FK_519e992ca163a0970d68e5221a5"`);
        await queryRunner.query(`ALTER TABLE "Pregunta" DROP CONSTRAINT "FK_f34a049baf6e537fe5b4e3d661a"`);
        await queryRunner.query(`ALTER TABLE "Pregunta" DROP CONSTRAINT "FK_68fc7b7f6e29014d6b188939cad"`);
        await queryRunner.query(`ALTER TABLE "Publicacion" DROP CONSTRAINT "FK_1961d0d9ce31f9887b22a1d0b53"`);
        await queryRunner.query(`DROP TABLE "Categoria_Evento"`);
        await queryRunner.query(`DROP TABLE "Evento"`);
        await queryRunner.query(`DROP TABLE "Reporte_Denuncia"`);
        await queryRunner.query(`DROP TABLE "Revision"`);
        await queryRunner.query(`DROP TABLE "Denuncia"`);
        await queryRunner.query(`DROP TABLE "Accion"`);
        await queryRunner.query(`DROP TABLE "Rol"`);
        await queryRunner.query(`DROP TABLE "Usuario_Rol"`);
        await queryRunner.query(`DROP TABLE "Usuario"`);
        await queryRunner.query(`DROP TABLE "Respuesta"`);
        await queryRunner.query(`DROP TABLE "Pregunta"`);
        await queryRunner.query(`DROP TABLE "Categoria_Pregunta"`);
        await queryRunner.query(`DROP TABLE "Publicacion"`);
        await queryRunner.query(`DROP TABLE "Perfil_Usuario"`);
        await queryRunner.query(`DROP TABLE "Estado_Usuario"`);
    }

}
