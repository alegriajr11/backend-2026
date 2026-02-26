import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InventarioModule } from './inventario/inventario.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './productos/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductoEntity]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProductosModule, UsuariosModule, InventarioModule, DatabaseModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule { }
