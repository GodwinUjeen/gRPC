import { Injectable } from '@nestjs/common';
import { CreatePostgresClientDto } from './dto/create-postgres-client.dto';
import { UpdatePostgresClientDto } from './dto/update-postgres-client.dto';

@Injectable()
export class PostgresClientService {
  create(createPostgresClientDto: CreatePostgresClientDto) {
    return 'This action adds a new postgresClient';
  }

  findAll() {
    return `This action returns all postgresClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postgresClient`;
  }

  update(id: number, updatePostgresClientDto: UpdatePostgresClientDto) {
    return `This action updates a #${id} postgresClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} postgresClient`;
  }
}
