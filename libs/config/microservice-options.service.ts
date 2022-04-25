import { ClientOptions } from '@grpc/grpc-js';
import {
  ClientProviderOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

export const userMicroserviceOptions:
  | MicroserviceOptions
  | ClientOptions
  | ClientProviderOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: 'libs/proto/user.proto',
  },
};

export const postgresMicroserviceOptions:
  | MicroserviceOptions
  | ClientOptions
  | ClientProviderOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'postgres',
    protoPath: 'libs/proto/postgres.proto',
  },
};
