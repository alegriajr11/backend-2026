import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length } from "class-validator";

export class CreateProductDto {

    @IsString({ message: 'El nombre del producto debe ser una cadena de texto' })
    @Length(3, 50, { message: 'El nombre del producto debe tener entre 3 y 50 caracteres' })
    @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
    nombre: string;

    @IsNumber({}, { message: 'El precio del producto debe ser un número' })
    @IsPositive({ message: 'El precio del producto debe ser un número positivo' })
    @IsNotEmpty({ message: 'El precio del producto es obligatorio' })
    precio: number;

    //Llave foranea relacionar con categoria, es opcional porque un producto puede no tener categoria
    @IsOptional()
    @IsNumber({}, { message: 'El id de la categoría debe ser un número' })
    @IsPositive({ message: 'El id de la categoría debe ser un número positivo' })
    categoriaId?: number;
}