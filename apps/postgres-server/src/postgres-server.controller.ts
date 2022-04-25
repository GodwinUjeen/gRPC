import { Controller, Get } from '@nestjs/common';
import { PostgresServerService } from './postgres-server.service';

@Controller()
export class PostgresServerController {
  constructor(private readonly postgresServerService: PostgresServerService) {}

  @Get()
  getHello(): string {
    return this.postgresServerService.getHello();
  }
}
