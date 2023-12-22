import { Module } from '@nestjs/common';
import { ProductosFacturasService } from './productos_facturas.service';
import { ProductosFacturasController } from './productos_facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosFacturas } from './entities/productos_factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosFacturas])],
  controllers: [ProductosFacturasController],
  providers: [ProductosFacturasService],
})
export class ProductosFacturasModule {}
