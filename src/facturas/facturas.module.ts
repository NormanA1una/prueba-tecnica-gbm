import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facturas } from './entities/factura.entity';
import { ProductosService } from 'src/productos/productos.service';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Facturas]), ProductosModule],
  controllers: [FacturasController],
  providers: [FacturasService],
})
export class FacturasModule {}
