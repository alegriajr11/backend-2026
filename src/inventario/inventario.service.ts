import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class InventarioService {

  //Inyectar el servicio de productos para poder usarlo en el inventario
  constructor(private readonly productosService: ProductosService) { }

  create(createInventarioDto: CreateInventarioDto) {
    return 'This action adds a new inventario';
  }

  findAll() {
    return `This action returns all inventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  getInventarioValue(){
    const products = this.productosService.findAll();
    const totalValue = products.reduce((total, product) => total + product.price, 0);
    return `El valor total del inventario es: ${totalValue}`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
