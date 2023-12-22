import { DataSource } from 'typeorm';
import { TasaDeCambio } from './tasa-de-cambio/entities/tasa-de-cambio.entity';
import { Productos } from './productos/entities/producto.entity';
import { Facturas } from './facturas/entities/factura.entity';
import { Clientes } from './cliente/entities/cliente.entity';
import { ProductosFacturas } from './productos_facturas/entities/productos_factura.entity';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [TasaDeCambio, Productos, Facturas, Clientes, ProductosFacturas],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.log('Error during Data Source initializacion', err);
  });
