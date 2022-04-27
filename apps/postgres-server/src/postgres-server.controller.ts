import { Body, Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  UpdateUserPostGres,
  UserByIdPostGres,
} from 'libs/interfaces/postgres-user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { PostgresServerService } from './postgres-server.service';

@Controller()
export class PostgresServerController {
  constructor(private postgresServerService: PostgresServerService) {}

  @GrpcMethod('PostgresService', 'FindUserById')
  getUserById(data: UserByIdPostGres) {
    return this.postgresServerService.getUser(data.id as number);
  }

  @GrpcMethod('PostgresService', 'CreateUser')
  public createUser(body: CreateUserDto): Promise<Users> {
    console.log(body);

    return this.postgresServerService.createUser(body);
  }

  @GrpcMethod('PostgresService', 'UpdateUser')
  public updateUser(data: UpdateUserPostGres): Promise<Users | string> {
    let updateData: UpdateUserPostGres = {};

    if (data.name) {
      updateData = {
        name: data.name,
      };
    }
    if (data.age) {
      updateData = {
        ...updateData,
        age: data.age,
      };
    }

    console.log(updateData);

    return this.postgresServerService.updateUser(data.id, {
      ...updateData,
    });
  }

  @GrpcMethod('PostgresService', 'DeleteUser')
  deleteUserById(data: UserByIdPostGres) {
    console.log(data);

    return this.postgresServerService.deleteUser(data.id as number);
  }
}
