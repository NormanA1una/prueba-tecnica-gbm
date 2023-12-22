import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasa-de-cambio' })
export class TasaDeCambio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fechaCambio: Date;

  @Column('decimal', { precision: 20, scale: 2 })
  valorCambio: number;
}
