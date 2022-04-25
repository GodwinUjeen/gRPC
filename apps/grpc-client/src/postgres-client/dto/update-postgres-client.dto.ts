import { PartialType } from '@nestjs/mapped-types';
import { CreatePostgresClientDto } from './create-postgres-client.dto';

export class UpdatePostgresClientDto extends PartialType(CreatePostgresClientDto) {
  id: number;
}
