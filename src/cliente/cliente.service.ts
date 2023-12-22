import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Clientes)
    private clienteRepository: Repository<Clientes>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.save(createClienteDto);
  }

  findAll() {
    return this.clienteRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(searchString: string) {
    const isNumeric =
      !isNaN(parseFloat(searchString)) && isFinite(+searchString);

    const cliente = await this.clienteRepository.findOne({
      where: isNumeric
        ? { id: +searchString }
        : { codigoCliente: searchString },
    });

    if (!cliente) {
      throw new NotFoundException('El Cliente no existe.');
    }

    return cliente;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}
