import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'libs/models/user.schema';
import { GrpcServerController } from './grpc-server.controller';
import { GrpcServerService } from './grpc-server.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/grpc-crud'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [GrpcServerController],
  providers: [GrpcServerService],
})
export class GrpcServerModule {}
