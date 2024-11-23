-- CreateTable
CREATE TABLE "notas" (
    "id" SERIAL NOT NULL,
    "nome_documento" TEXT,
    "emitente" TEXT,
    "valor_total_tributos" BIGINT NOT NULL,
    "valor_liquido_tributos" BIGINT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultima_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exclusao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notas_id_key" ON "notas"("id");
