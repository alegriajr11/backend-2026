import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Habilitar Validación global
  app.useGlobalPipes(
    new ValidationPipe(
      {
        whitelist: true, // Elimina propiedades no definidas en el DTO
        forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
        transform: true, // Transforma los tipos de datos según lo definido en el DTO
      }
    )
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
