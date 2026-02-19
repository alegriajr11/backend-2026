import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private products = [
        {
            id: 1,
            name: 'Producto 1',
            price: 100,
        },
        {
            id: 2,
            name: 'Producto 2',
            price: 200,
        }
    ];

    //Encontrar todos los productos
    findAll() {
        return this.products;
    }

    findOne(id_producto: number) {
        const product = this.products.find(p => p.id === id_producto)
        if (!product) throw new NotFoundException('Producto no encontrado');
        return product;
    }

    create(product: { name: string, price: number }) {
        const newProduct = { id: this.products.length + 1, ...product };
        this.products.push(newProduct);
        return 'Producto creado exitosamente';
    }
}
