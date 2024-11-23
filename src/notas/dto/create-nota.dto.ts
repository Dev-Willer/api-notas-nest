export class CreateNotaDto { 
    nome_documento: string
    emitente: string
    valor_liquido_tributos: number
    valor_total_tributos: number
    data_criacao: Date
}
