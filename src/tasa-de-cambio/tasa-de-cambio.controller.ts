import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { TasaDeCambioService } from './tasa-de-cambio.service';
import { CreateTasaDeCambioDto } from './dto/create-tasa-de-cambio.dto';
import { UpdateTasaDeCambioDto } from './dto/update-tasa-de-cambio.dto';

@Controller('tasa-de-cambio')
export class TasaDeCambioController {
  constructor(private readonly tasaDeCambioService: TasaDeCambioService) {}

  @Post()
  create(@Body() createTasaDeCambioDto: CreateTasaDeCambioDto) {
    return this.tasaDeCambioService.create(createTasaDeCambioDto);
  }

  @Get()
  findAll(
    @Query('day') day: number,
    @Query('month') month: number,
    @Query('year') year: number,
  ) {
    if (day) {
      return this.tasaDeCambioService.findOne(day, month, year);
    }

    return this.tasaDeCambioService.findAll(month, year);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTasaDeCambioDto: UpdateTasaDeCambioDto,
  ) {
    return this.tasaDeCambioService.update(+id, updateTasaDeCambioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasaDeCambioService.remove(+id);
  }
}
