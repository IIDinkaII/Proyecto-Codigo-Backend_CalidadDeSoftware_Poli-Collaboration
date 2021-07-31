import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/revision.controller';
import { ServicesService } from './services/revision.service';

@Module({
  controllers: [ControllersController],
  providers: [ServicesService]
})

export class RevisionesModule {}
