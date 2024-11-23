import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class NotasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(nota: CreateNotaDto) {
    
    try {
      const cadastrarNota = await this.prisma.notas.create({
        data: nota,
      });
      return cadastrarNota;

    } catch (error) {

      return error.message
    }
  }

  async findAll() {
    try {
      const listarnotas = await this.prisma.notas.findMany()
      return listarnotas;
    } catch (error) {
      return error.message
    }
  }

  async findOne(id: number) {
    try {
      const list = await this.prisma.notas.findUnique({
        where: {
          id,
        }
      })

      if(!list){
        throw new Error('Nota não encontrada!')
      }
  
      return list;

    } catch (error) {
      return error.message
    }
  }

  async update(id: number, updateNotaDto: UpdateNotaDto) {
    try {
      const notaExistss = await this.prisma.notas.findUnique({
        where: {
          id,
        }
      });

      if(!notaExistss){
        throw new Error('Nota não encontrada.')
      }

      return await this.prisma.notas.update({
        data: updateNotaDto,
        where: {
          id,
        }
      })

    } catch (error) {
      return error.message
    }
  }

  async remove(id: number) {
    try {
      const notaExists = await this.prisma.notas.findUnique({
        where: {
          id,
        }
      });

      if(!notaExists){
        throw new Error('Nota não encontrada.')
      }

      await this.prisma.notas.delete({
        where: {
          id,
        }
      });

      return 'A nota foi deletada com sucesso!'
      
    } catch (error) {

      return error.message;
    }
  }
}
