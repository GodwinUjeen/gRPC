import {
  Body,
  Controller,
  Delete,
  Get,
  OnModuleInit,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { PostgresClientService } from './postgres-client.service';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { CreateUserDto } from 'apps/postgres-server/src/dto/create-user.dto';
import { Users } from 'apps/postgres-server/src/entities/user.entity';
import {
  PostgresService,
  UserPostGres,
} from 'libs/interfaces/postgres-user.interface';
import { UpdateUserDto } from 'apps/postgres-server/src/dto/update-user.dto';

@Controller('postgres')
export class PostgresClientController implements OnModuleInit {
  // constructor(private readonly postgresClientService: PostgresClientService) {}

  @Client({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:3002',
      package: 'postgres',
      protoPath: 'libs/proto/postgres.proto',
    },
  })
  private client: ClientGrpc;
  private postgresClientService: PostgresService;

  onModuleInit() {
    this.postgresClientService =
      this.client.getService<PostgresService>('PostgresService');
  }

  @Get(':id')
  public getUser(
    @Param('id', ParseIntPipe) id: number, //  Promise<UserPostGres>
  ) {
    console.log(id);

    return this.postgresClientService.findUserById({ id });
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<UserPostGres> {
    console.log(body);

    return this.postgresClientService.createUser({
      name: body.name,
      age: body.age,
    });
  }

  @Patch(':id')
  public updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ): Promise<UserPostGres> {
    console.log({ id, ...body });

    return this.postgresClientService.updateUser({ id, ...body });
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    console.log(id);

    return this.postgresClientService.deleteUser({ id });
  }
}
