import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,
    ) { }


    async findAll(): Promise<ProductoEntity[]> {
        const productos = await this.productoRepository.find({ relations: ['categorias'] });
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

    async findWhitPagination(page: number, limit: number): Promise<ProductoEntity[]> {
        const productos = await this.productoRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            order: { nombre: 'ASC' },
            relations: ['categorias'],
        });
        return productos;
    }

    async searchByName(name: string): Promise<ProductoEntity[]> {
        const productos = await this.productoRepository
            .createQueryBuilder('producto')
            .where('LOWER(producto.nombre) LIKE :name', { name: `%${name.toLowerCase()}%` })
            .leftJoinAndSelect('producto.categorias', 'categoria')
            .getMany();
        return productos;
    }

    async searchv2ByName(name: string): Promise<ProductoEntity[]> {
        const productos = await this.productoRepository.find({
            where: { nombre: name },
            relations: ['categorias'],
        });
        return productos;
    }
}
