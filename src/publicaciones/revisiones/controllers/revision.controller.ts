import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
  import { Public } from 'src/auth/decorators/public.decorator';
  import { Roles } from 'src/auth/decorators/roles.decorator';
  import { Role } from 'src/auth/models/roles.model';
  import { RolesGuard } from 'src/auth/guards/roles.guard';
  import { RevisionService } from '../services/revision.service'; 
  import { DenunciaService } from 'src/publicaciones/denuncias/services/denuncia.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('revision')
@Controller('api/revision')
export class RevisionController {
    constructor(
        private _httpRevisionService: RevisionService,
        private _httpDenunciaService: DenunciaService,
    ) {}

}
