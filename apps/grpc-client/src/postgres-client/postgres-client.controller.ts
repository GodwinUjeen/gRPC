import { Controller, Get, OnModuleInit } from '@nestjs/common';

import { PostgresClientService } from './postgres-client.service';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';

@Controller('postgres')
export class PostgresClientController implements OnModuleInit {
  // constructor(private readonly postgresClientService: PostgresClientService) {}

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'postgres',
      protoPath: 'libs/proto/postgres.proto',
    },
  })
  private client: ClientGrpc;
  private postgresClientService: PostgresClientService;

  onModuleInit() {
    this.postgresClientService =
      this.client.getService<PostgresClientService>('PostgresService');
  }

  @Get()
  getHello() {
    return 'Hello World';
  }
}
