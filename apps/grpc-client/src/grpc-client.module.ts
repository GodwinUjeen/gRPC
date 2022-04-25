import { Module } from '@nestjs/common';
import { GrpcClientController } from './grpc-client.controller';
import { GrpcClientService } from './grpc-client.service';
import { PostgresClientModule } from './postgres-client/postgres-client.module';

@Module({
  imports: [PostgresClientModule],
  controllers: [GrpcClientController],
  providers: [GrpcClientService],
})
export class GrpcClientModule {}
