import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
