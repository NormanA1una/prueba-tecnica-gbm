import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Productos)
    private productosRepository: Repository<Productos>,
  ) {}
  create(createProductoDto: CreateProductoDto) {
    return this.productosRepository.save(createProductoDto);
  }

  findAll() {
    return this.productosRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  //TODO hacer la relacion para la tasa de cambio del día
  async findOne(stringSearch: string) {
    const notAlphanumeric = /^[a-zA-Z]+$/.test(stringSearch);
    const containsNumber = /\d/.test(stringSearch);

    let condicion: any;

    if (containsNumber && !notAlphanumeric) {
      condicion = { codigoProducto: stringSearch };
    }

    if (notAlphanumeric && !containsNumber) {
      condicion = { descripcion: stringSearch };
    }

    const producto = await this.productosRepository.findOne({
      where: condicion,
    });

    if (!producto) {
      throw new NotFoundException('El Producto no existe.');
    }

    return producto;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productosRepository.update(id, updateProductoDto);
  }

  remove(id: number) {
    return this.productosRepository.delete(id);
  }
}
