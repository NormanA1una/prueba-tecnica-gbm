import { Facturas } from 'src/facturas/entities/factura.entity';
import { Productos } from 'src/productos/entities/producto.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'productos_facturas' })
export class ProductosFacturas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  facturaId: number;

  @Column('int')
  productosId: number;

  @Column('int')
  cantidadProducto: number;

  @Column('varchar', { length: 256 })
  nombreProducto: string;

  @Column('decimal', { precision: 20, scale: 2 })
  precioCordoba: number;

  @Column('decimal', { precision: 20, scale: 2 })
  precioDolar: number;

  @Column('decimal', { precision: 20, scale: 2 })
  totalCordoba: number;

  @Column('decimal', { precision: 20, scale: 2 })
  totalDolar: number;

  @ManyToOne((type) => Facturas, (facturas) => facturas.productosFacturas)
  factura: Facturas;

  /*  @ManyToOne((type) => Productos, (productos) => productos.id)
  producto: Productos; */
}
