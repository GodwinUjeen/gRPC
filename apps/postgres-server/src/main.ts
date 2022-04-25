import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { postgresMicroserviceOptions } from 'libs/config/microservice-options.service';
import { PostgresServerModule } from './postgres-server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostgresServerModule,
    postgresMicroserviceOptions as MicroserviceOptions,
  );
  await app.listen().then(() => {
    console.log('Postgres Server started');
  });
}
bootstrap();
