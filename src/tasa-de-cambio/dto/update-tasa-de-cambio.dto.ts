import { PartialType } from '@nestjs/mapped-types';
import { CreateTasaDeCambioDto } from './create-tasa-de-cambio.dto';
import { IsDate, IsNumber } from 'class-validator';

export class UpdateTasaDeCambioDto extends PartialType(CreateTasaDeCambioDto) {
  @IsDate()
  fechaCambio: Date;

  @IsNumber()
  valorCambio: number;
}
