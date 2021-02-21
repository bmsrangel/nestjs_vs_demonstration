import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserModel from './models/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // async getAllUsers() {
  // const users: UserModel[] = await this.usersService.getAllUsers();
  // return users;
  // }

  // @Get(':id')
  // async getUserById(@Param('id') id: number) {
  //   const user: UserModel = await this.usersService.getUserById(id);
  //   return user;
  // }

  @Get(':id?')
  async getUsersOrUserById(@Param('id') id: number) {
    if (id) {
      const user: UserModel = await this.usersService.getUserById(id);
      return user;
    } else {
      const users: UserModel[] = await this.usersService.getAllUsers();
      return users;
    }
  }

  @Post()
  async createUser(@Body() user: UserModel) {
    const newUser: UserModel = await this.usersService.createUser(user);
    return newUser;
  }
}
