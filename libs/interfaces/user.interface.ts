import { Observable } from 'rxjs';

export interface UserById {
  id: string;
}

export interface User {
  id: string;
  name: string;
  age?: number;
}

export interface UserIDs {
  data: string[];
}

export interface CreateUser {
  name: string;
  age?: number;
}

export interface UpdateUser {
  id: string;
  name?: string;
  age?: number;
}

export interface ResponseData {
  response: string;
}

export interface UserService {
  createUser(data: CreateUser): Promise<User>;
  updateUser(data: UpdateUser): Promise<User>;

  findOne(data: UserById): Observable<User>;
  findMany(data: UserIDs): Promise<User[]>;
  findAll({}): Promise<User[]>;

  deleteUser(data: UserById): Observable<ResponseData>;
}
