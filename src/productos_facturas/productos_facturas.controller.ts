import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosFacturasService } from './productos_facturas.service';
import { CreateProductosFacturaDto } from './dto/create-productos_factura.dto';
import { UpdateProductosFacturaDto } from './dto/update-productos_factura.dto';

@Controller('productos-facturas')
export class ProductosFacturasController {
  constructor(private readonly productosFacturasService: ProductosFacturasService) {}

  @Post()
  create(@Body() createProductosFacturaDto: CreateProductosFacturaDto) {
    return this.productosFacturasService.create(createProductosFacturaDto);
  }

  @Get()
  findAll() {
    return this.productosFacturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosFacturasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductosFacturaDto: UpdateProductosFacturaDto) {
    return this.productosFacturasService.update(+id, updateProductosFacturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosFacturasService.remove(+id);
  }
}
