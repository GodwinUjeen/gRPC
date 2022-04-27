export interface UserByIdPostGres {
  id: number;
}

export interface UserPostGres {
  id: number;
  name: string;
  age?: number;
}

export interface UserIDsPostGres {
  data: string[];
}

export interface CreateUserPostGres {
  name: string;
  age?: number;
}

export interface UpdateUserPostGres {
  id?: number;
  name?: string;
  age?: number;
}

export interface ResponseDataPostGres {
  response: string;
}

export interface PostgresService {
  createUser(data: CreateUserPostGres): Promise<UserPostGres>;

  findUserById(data: UserByIdPostGres): Promise<UserPostGres>;

  updateUser(data: UpdateUserPostGres): Promise<UserPostGres>;

  deleteUser(data: UserByIdPostGres): Promise<UserPostGres>;
}
