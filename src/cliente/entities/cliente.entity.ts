import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clientes' })
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 256 })
  nombreCliente: string;

  @Column('varchar', { length: 256 })
  codigoCliente: string;

  @Column('int')
  numeroCliente: number;

  @Column('varchar', { length: 256 })
  direccionCliente: string;
}
