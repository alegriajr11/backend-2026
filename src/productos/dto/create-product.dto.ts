export class CreateProductDto {
    
    nombre: string;

    precio: number;

    //Llave foranea relacionar con categoria, es opcional porque un producto puede no tener categoria
    categoriaId?: number;
}