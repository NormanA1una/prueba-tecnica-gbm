import { Module } from '@nestjs/common';
import { TasaDeCambioService } from './tasa-de-cambio.service';
import { TasaDeCambioController } from './tasa-de-cambio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasaDeCambio } from './entities/tasa-de-cambio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasaDeCambio])],
  controllers: [TasaDeCambioController],
  providers: [TasaDeCambioService],
})
export class TasaDeCambioModule {}
