import { IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombreProducto: string;

  @IsString()
  codigoProducto: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precioCordoba: number;

  @IsNumber()
  precioDolar: number;

  @IsNumber()
  TasaDeCambioId: number;
}
