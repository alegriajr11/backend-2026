import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    // @Get()
    // async findAll() {
    //     return await this.productosService.findAll();
    // }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return await this.productosService.create(createProductDto);
    }

    @Get('pagination')
    async findWhitPagination(
        @Query('page') page: string = '1',
        @Query('limit') limit: string = '10',
    ) {
        return await this.productosService.findWhitPagination(+page, +limit);
    }

    @Get('search')
    async searchByName(@Query('name') name: string) {
        return await this.productosService.searchByName(name);
    }
}
