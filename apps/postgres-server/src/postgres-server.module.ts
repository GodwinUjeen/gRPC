import { Module } from '@nestjs/common';
import { PostgresServerController } from './postgres-server.controller';
import { PostgresServerService } from './postgres-server.service';

@Module({
  imports: [],
  controllers: [PostgresServerController],
  providers: [PostgresServerService],
})
export class PostgresServerModule {}
