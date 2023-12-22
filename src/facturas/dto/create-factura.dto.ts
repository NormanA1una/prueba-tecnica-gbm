import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateFacturaDto {
  @IsNumber()
  clienteId: number;

  @IsDate()
  fecha: Date;

  @IsNumber()
  cantidadProducto: number;

  @IsString()
  numeroFactura: string;

  @IsNumber()
  totalFacturado: number;

  @IsNumber()
  iva: number;

  @IsArray()
  productos: [];
}
