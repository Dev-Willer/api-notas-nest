/*
  Warnings:

  - You are about to alter the column `valor_total_tributos` on the `notas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `valor_liquido_tributos` on the `notas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "notas" ALTER COLUMN "valor_total_tributos" SET DATA TYPE INTEGER,
ALTER COLUMN "valor_liquido_tributos" SET DATA TYPE INTEGER;
