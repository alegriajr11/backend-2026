import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from 'src/categoria/dto/create-categoria.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,
    ) { }


    async findAll(): Promise<ProductoEntity[]> {
        const productos =  await this.productoRepository.find({ relations: ['categorias'] });
        return productos;
    }

    async findOne(id: number): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne(
            {
                where: { id },
                relations: ['categorias'],
            }
        );
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }

    async create(createProductDto: CreateProductDto): Promise<ProductoEntity> {
        const producto = this.productoRepository.create({
            nombre: createProductDto.nombre,
            precio: createProductDto.precio,
            categoriaId: createProductDto.categoriaId,
        });
        return await this.productoRepository.save(producto);
    }
}
