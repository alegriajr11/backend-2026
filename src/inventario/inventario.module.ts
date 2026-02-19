import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { ProductosService } from 'src/productos/productos.service';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService, ProductosService],
})
export class InventarioModule {}
