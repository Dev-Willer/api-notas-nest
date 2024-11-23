import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { DatabaseModule } from 'src/database/prisma.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
