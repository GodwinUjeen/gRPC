import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserById } from 'libs/interfaces/user.interface';
import { User, UserDocument } from 'libs/models/user.schema';
import { Model, Types } from 'mongoose';
import * as userInterface from 'libs/interfaces/user.interface';

@Injectable()
export class GrpcServerService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: userInterface.User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(data: UserById): Promise<User> {
    return this.userModel.findById(new Types.ObjectId(data.id));
  }

  async findUserByIDs(data: Array<string>): Promise<User[]> {
    const users = await this.userModel.find({
      _id: {
        $in: [...data],
      },
    });

    return users;
  }

  async update(data: userInterface.UpdateUser): Promise<User> {
    let updateData = {};

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
    return this.userModel.findByIdAndUpdate(data.id, updateData, { new: true });
  }

  async delete(data: UserById): Promise<userInterface.ResponseData> {
    const res = await this.userModel.findByIdAndRemove(data.id);
    const response =
      res != null ? 'User deleted successfully' : 'Something went wrong';

    return { response };
  }
}
