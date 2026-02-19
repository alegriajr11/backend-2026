import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    @Get()
    findAll() {
        return this.productosService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productosService.findOne(id);
    }

    @Post()
    createProduct(@Body() product: { name: string, price: number }) {
        return this.productosService.create(product);
    }
}
