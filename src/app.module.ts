import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import 'reflect-metadata';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { ProductosModule } from './productos/productos.module';
import { TasaDeCambioModule } from './tasa-de-cambio/tasa-de-cambio.module';
import { FacturasModule } from './facturas/facturas.module';
import { ReportesModule } from './reportes/reportes.module';
import { ProductosFacturasModule } from './productos_facturas/productos_facturas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    ClienteModule,
    ProductosModule,
    TasaDeCambioModule,
    FacturasModule,
    ReportesModule,
    ProductosFacturasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private datasurce: DataSource,
    private configService: ConfigService,
  ) {}
}
