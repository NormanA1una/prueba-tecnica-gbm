import { Productos } from 'src/productos/entities/producto.entity';
import { ProductosFacturas } from 'src/productos_facturas/entities/productos_factura.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'facturas' })
export class Facturas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  clienteId: number;

  @Column('date')
  fecha: Date;

  @Column('varchar', { length: 256 })
  numeroFactura: string;

  @Column('decimal', { precision: 20, scale: 2, nullable: true })
  subtotalFacturado: number;

  @Column('decimal', { precision: 20, scale: 2, nullable: true })
  totalFacturado: number;

  @Column('decimal', { precision: 20, scale: 2, nullable: true })
  iva: number;

  @OneToMany(
    () => ProductosFacturas,
    (productosFacturas) => productosFacturas.factura,
  )
  productosFacturas: ProductosFacturas[];

  /* @ManyToMany(() => Productos)
  @JoinTable({ name: 'productos_facturas' })
  productos: Productos[]; */
}
