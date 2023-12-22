import { Facturas } from 'src/facturas/entities/factura.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'productos' })
export class Productos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 256 })
  nombreProducto: string;

  @Column('varchar', { length: 256 })
  codigoProducto: string;

  @Column('varchar', { length: 256 })
  descripcion: string;

  @Column('int')
  precioCordoba: number;

  @Column('int')
  precioDolar: number;

  @Column('int')
  TasaDeCambioId: number;

  /* @ManyToMany(() => Facturas)
  @JoinTable({ name: 'productos_facturas' })
  productos: Facturas[]; */
}
