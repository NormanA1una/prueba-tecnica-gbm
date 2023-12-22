import { PartialType } from '@nestjs/mapped-types';
import { CreateProductosFacturaDto } from './create-productos_factura.dto';
import { IsNumber } from 'class-validator';

export class UpdateProductosFacturaDto extends PartialType(
  CreateProductosFacturaDto,
) {
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
