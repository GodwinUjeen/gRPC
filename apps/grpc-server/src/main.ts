import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { userMicroserviceOptions } from 'libs/config/microservice-options.service';
import { GrpcServerModule } from './grpc-server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcServerModule,
    userMicroserviceOptions as MicroserviceOptions,
  );
  await app.listen().then(() => {
    console.log('Users Server started');
  });
}
bootstrap();
