import { Injectable } from '@nestjs/common';
import { CreateProductosFacturaDto } from './dto/create-productos_factura.dto';
import { UpdateProductosFacturaDto } from './dto/update-productos_factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosFacturas } from './entities/productos_factura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosFacturasService {
  constructor(
    @InjectRepository(ProductosFacturas)
    private productosFacturasRepository: Repository<ProductosFacturas>,
  ) {}
  create(createProductosFacturaDto: CreateProductosFacturaDto) {
    return 'This action adds a new productosFactura';
  }

  findAll() {
    return `This action returns all productosFacturas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productosFactura`;
  }

  update(id: number, updateProductosFacturaDto: UpdateProductosFacturaDto) {
    return `This action updates a #${id} productosFactura`;
  }

  remove(id: number) {
    return `This action removes a #${id} productosFactura`;
  }
}
