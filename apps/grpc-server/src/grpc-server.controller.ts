import { Controller } from '@nestjs/common';
import { GrpcServerService } from './grpc-server.service';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById, User, UserIDs } from 'libs/interfaces/user.interface';

@Controller()
export class GrpcServerController {
  constructor(private grpcUserService: GrpcServerService) {}

  @GrpcMethod('UserService', 'FindOne')
  findOne(data: UserById) {
    return this.grpcUserService.findById(data);
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll() {
    const data = await this.grpcUserService.findAll();
    return { data };
  }

  @GrpcMethod('UserService', 'FindMany')
  async findMany(ids: UserIDs) {
    const data = await this.grpcUserService.findUserByIDs(ids.data);

    return { data };
  }

  @GrpcMethod('UserService', 'CreateUser')
  createUser(data: User) {
    return this.grpcUserService.create(data);
  }

  @GrpcMethod('UserService', 'UpdateUser')
  updateUser(data: User) {
    return this.grpcUserService.update(data);
  }

  @GrpcMethod('UserService', 'DeleteUser')
  async deleteUserById(data: UserById) {
    return this.grpcUserService.delete(data);
  }
}
