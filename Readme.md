**Utilizando o Prisma dentro da aplicação**

- Realizo as instalações das dependencias do prisma, sendo elas: 
 ->  npm install prisma --save-dev
 -> npx prisma
 -> npx prisma init

- Efetuo a modelagem dos meus schemas dentro da pasta que o Prisma me gera e então gero as minhas Migrations com o comando
 -> npx prisma migrate dev --name init

- Logo em seguida eu gero o meu Prisma client
 -> npm install @prisma/client

- Feito isso, eu crio uma pasta que faça menção ao meu banco de dados e nela eu crio o meu service(notas.service.ts) do meu banco de dados com o código:

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

- Após gerar o meu service eu preciso gerar o meu module (notas.module.ts) e exporta-lo, utilizando o seguinte código:

import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

- conexao com o banco feita, basta que eu acesse o prisma studio através do comando:
 -> npx prisma studio
