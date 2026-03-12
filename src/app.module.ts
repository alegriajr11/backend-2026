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
import { UsuarioModule } from './modules/usuario/usuario.module';
import { RolModule } from './modules/rol/rol.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductoEntity]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProductosModule, UsuariosModule, InventarioModule, DatabaseModule, CategoriaModule, UsuarioModule, RolModule],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule { }
