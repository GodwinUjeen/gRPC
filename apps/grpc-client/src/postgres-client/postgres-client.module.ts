import { Module } from '@nestjs/common';
import { PostgresClientService } from './postgres-client.service';
import { PostgresClientController } from './postgres-client.controller';

@Module({
  controllers: [PostgresClientController],
  providers: [PostgresClientService]
})
export class PostgresClientModule {}
