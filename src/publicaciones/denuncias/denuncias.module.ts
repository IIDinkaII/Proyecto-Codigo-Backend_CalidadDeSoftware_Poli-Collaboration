import { Module } from '@nestjs/common';
import { DenunciaController } from './controllers/denuncia.controller';
import { DenunciaService } from './services/denuncia.service';

@Module({
  controllers: [DenunciaController],
  providers: [DenunciaService],
})
export class DenunciasModule {}
