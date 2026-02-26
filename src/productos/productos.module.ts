import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductoEntity])],
    providers: [ProductosService],
    controllers: [ProductosController],
    exports: [ProductosService],
})
export class ProductosModule {

}
