import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    nome_documento: string
    emitente: string
    valor_liquido_tributos: number
    valor_total_tributos: number
    data_criacao: Date
}
