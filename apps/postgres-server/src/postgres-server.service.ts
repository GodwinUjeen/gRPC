import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserPostGres } from 'libs/interfaces/postgres-user.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class PostgresServerService {
  @InjectRepository(Users)
  private readonly repository: Repository<Users>;

  public async getUser(id: number): Promise<Users | string> {
    const user = await this.repository.findOne({
      where: { id: id, isDeleted: false },
    });
    return user ? user : 'No users found';
  }

  public createUser(body: CreateUserDto): Promise<Users> {
    const user: Users = new Users();

    user.name = body.name;
    user.age = body.age;

    return this.repository.save(user);
  }

  public async updateUser(
    id: number,
    updateData: UpdateUserPostGres,
  ): Promise<Users | string> {
    await this.repository.update(id, updateData);
    return this.getUser(id);
  }

  public deleteUser(id: number): Promise<any> {
    console.log(id);

    return this.repository.delete(id);
  }
}
