import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

global.users = [];

@Injectable()
export class UserService {
  findAllUsers(): any {
    return global.users;
  }

  create(user: CreateUserDto): any {
    return global.users.push(user);
  }
}
