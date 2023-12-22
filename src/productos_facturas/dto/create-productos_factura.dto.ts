import { IsNumber } from 'class-validator';

export class CreateProductosFacturaDto {
  @IsNumber()
  facturaId: number;

  @IsNumber()
  productosId: number;

  @IsNumber()
  cantidadProducto: number;

  @IsNumber()
  totalCordoba: number;

  @IsNumber()
  totalDolares: number;
}
