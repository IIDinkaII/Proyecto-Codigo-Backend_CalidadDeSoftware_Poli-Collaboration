import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DenunciaController } from './controllers/denuncia.controller';
import { Denuncia } from './entities/denuncia.entity';
import { DenunciaService } from './services/denuncia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Denuncia])],
  controllers: [DenunciaController],
  providers: [DenunciaService],
})
export class DenunciasModule {}
