import {
  Body,
  Controller,
  Delete,
  Get,
  OnModuleInit,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import {
  CreateUser,
  ResponseData,
  UpdateUser,
  User,
  UserIDs,
  UserService,
} from 'libs/interfaces/user.interface';

import { Observable } from 'rxjs';

@Controller('user')
export class GrpcClientController implements OnModuleInit {
  // constructor(private readonly grpcClientService: GrpcClientService) {}

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: 'libs/proto/user.proto',
    },
  })
  private client: ClientGrpc;
  private userService: UserService;

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Observable<User> {
    return this.userService.findOne({ id });
  }

  @Get('all/users')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll({});
  }

  @Get('multiple/users')
  async getUsersById(@Body() data: UserIDs): Promise<User[]> {
    return this.userService.findMany({ data: data.data });
  }

  @Post('create')
  createUser(@Body() data: CreateUser) {
    return this.userService.createUser(data);
  }

  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() data: CreateUser) {
    const updateUserData: UpdateUser = {
      id: id,
      ...data,
    };

    return this.userService.updateUser(updateUserData);
  }

  @Delete('/:id')
  async deleteUserById(
    @Param('id') id: string,
  ): Promise<Observable<ResponseData>> {
    return this.userService.deleteUser({ id });
  }
}
