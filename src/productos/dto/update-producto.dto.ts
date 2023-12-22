import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
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
