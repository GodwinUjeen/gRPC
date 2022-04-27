import { NestFactory } from '@nestjs/core';
import { postgresMicroserviceOptions } from 'libs/config/microservice-options.service';
import { GrpcClientModule } from './grpc-client.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcClientModule);
  // app.connectMicroservice(postgresMicroserviceOptions);
  // await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
