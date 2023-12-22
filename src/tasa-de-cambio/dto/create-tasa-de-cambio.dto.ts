import { IsDate, IsNumber } from 'class-validator';

export class CreateTasaDeCambioDto {
  @IsDate()
  fechaCambio: Date;

  @IsNumber()
  valorCambio: number;
}
