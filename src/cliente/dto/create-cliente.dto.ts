import { IsNumber, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombreCliente: string;

  @IsString()
  codigoCliente: string;

  @IsNumber()
  numeroCliente: number;

  @IsString()
  direccionCliente: string;
}
