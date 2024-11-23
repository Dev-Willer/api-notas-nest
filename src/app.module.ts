import { Module } from "@nestjs/common";
import { NotasModule } from "./notas/notas.module";


@Module({
  imports: [NotasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
