import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
