import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Facturas } from './entities/factura.entity';
import { Repository } from 'typeorm';
import { AppDataSource } from 'src/app-datasource';
import { ProductosFacturas } from 'src/productos_facturas/entities/productos_factura.entity';

@Injectable()
export class FacturasService {
  constructor(
    @InjectRepository(Facturas)
    private facturasRepository: Repository<Facturas>,
  ) {}
  dataSource = AppDataSource;

  async create(createFacturaDto: CreateFacturaDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const factura = await queryRunner.manager.save(Facturas, {
        clienteId: createFacturaDto.clienteId,
        fecha: createFacturaDto.fecha,
        numeroFactura: createFacturaDto.numeroFactura,
      });

      const productosFacturas = this.getProductosFactura(
        createFacturaDto.productos,
        factura.id,
      );

      await queryRunner.manager.insert(ProductosFacturas, productosFacturas);

      const totales = this.calcularTotales(productosFacturas);

      await queryRunner.manager.update(Facturas, factura.id, totales);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.facturasRepository.find({
      relations: { productosFacturas: true },
    });
  }

  async findOne(searchString: string) {
    let factura: Facturas | undefined;

    if (!isNaN(+searchString)) {
      factura = await this.facturasRepository.findOne({
        where: {
          clienteId: +searchString,
        },
      });
    }

    if (isNaN(+searchString)) {
      factura = await this.facturasRepository.findOne({
        where: {
          numeroFactura: searchString,
        },
      });
    }

    if (!factura) {
      throw new NotFoundException('No se encontró la factura.');
    }

    return factura;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return this.facturasRepository.delete(id);
  }

  private getProductosFactura(productos: any[], facturaId: any) {
    return productos.map((p: any) => {
      return {
        facturaId: facturaId,
        productosId: p.productosId,
        cantidadProducto: p.cantidadProducto,
        nombreProducto: p.nombreProducto,
        totalCordoba: p.precioCordoba * p.cantidadProducto,
        totalDolar: p.precioDolar * p.cantidadProducto,
        precioCordoba: p.precioCordoba,
        precioDolar: p.precioDolar,
      };
    });
  }

  private calcularTotales(productosFacturas: any[]) {
    let subtotal = 0;
    let iva = 0;
    let total = 0;

    for (const p of productosFacturas) {
      subtotal += p.precioCordoba * p.cantidadProducto;
    }

    iva = +(subtotal * 0.15).toFixed(2);

    total = subtotal + iva;

    return {
      iva: iva,
      subtotalFacturado: subtotal,
      totalFacturado: total,
    };
  }
}
