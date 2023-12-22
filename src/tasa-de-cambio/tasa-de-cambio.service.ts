import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTasaDeCambioDto } from './dto/create-tasa-de-cambio.dto';
import { UpdateTasaDeCambioDto } from './dto/update-tasa-de-cambio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasaDeCambio } from './entities/tasa-de-cambio.entity';
import { Between, Repository } from 'typeorm';
import { AppDataSource } from 'src/app-datasource';

@Injectable()
export class TasaDeCambioService {
  constructor(
    @InjectRepository(TasaDeCambio)
    private tasaDeCambioRepository: Repository<TasaDeCambio>,
  ) {}
  dataSource = AppDataSource;

  create(createTasaDeCambioDto: CreateTasaDeCambioDto) {
    return this.tasaDeCambioRepository.save(createTasaDeCambioDto);
  }

  async findAll(month: number, year: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return this.dataSource
      .getRepository(TasaDeCambio)
      .createQueryBuilder('tasa-de-cambio')
      .where({
        fechaCambio: Between(startDate, endDate),
      })
      .getMany();
  }

  async findOne(day: number, month: number, year: number) {
    const date = new Date(year, month - 1, day);

    const tasa = await this.dataSource
      .getRepository(TasaDeCambio)
      .createQueryBuilder('tasa-de-cambio')
      .where({
        fechaCambio: date,
      })
      .getOne();

    if (!tasa) {
      throw new NotFoundException(
        `No se encontro la tasa de cambio para el día ${day}/${month}/${year}`,
      );
    }

    return tasa;
  }

  update(id: number, updateTasaDeCambioDto: UpdateTasaDeCambioDto) {
    return this.tasaDeCambioRepository.update(id, updateTasaDeCambioDto);
  }

  remove(id: number) {
    return this.tasaDeCambioRepository.delete(id);
  }
}
