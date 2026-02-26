import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'productos'})
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    nombre: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    precio: number;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'fecha_actualizacion' })
    fechaActualizacion: Date;

}