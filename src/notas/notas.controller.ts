import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  
  @Post('cadastrarnota')
  @HttpCode(201)
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notasService.create(createNotaDto);   
  }

  @Get('listarnotas')
  findAll() {
    return this.notasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notasService.update(+id, updateNotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notasService.remove(+id);
  }
}
