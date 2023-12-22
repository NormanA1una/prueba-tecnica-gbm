import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsString()
  nombreCliente: string;

  @IsString()
  codigoCliente: string;

  @IsNumber()
  numeroCliente: number;

  @IsString()
  direccionCliente: string;
}
