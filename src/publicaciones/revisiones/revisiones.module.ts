import { Module } from '@nestjs/common';
import { RevisionController } from './controllers/revision.controller';
import { RevisionService } from './services/revision.service';

@Module({
  controllers: [RevisionController],
  providers: [RevisionService]
})

export class RevisionesModule {}
