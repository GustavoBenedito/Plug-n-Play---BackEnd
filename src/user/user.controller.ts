import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAllUsers();
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    if (!user.email || !user.name)
      throw new BadRequestException('Email e nome precisam serem fornecidos');
    return this.userService.create(user);
  }
}
