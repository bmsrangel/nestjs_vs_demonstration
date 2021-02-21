import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import UserModel from './models/user.model';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UsersService {
  async getAllUsers(): Promise<UserModel[]> {
    const response: AxiosResponse<UserModel[]> = await axios.get(URL);
    return response.data.map((userJson) => UserModel.fromJson(userJson));
  }

  async getUserById(id: number): Promise<UserModel> {
    const response: AxiosResponse<UserModel> = await axios.get(`${URL}/${id}`);
    const userData = response.data;
    return UserModel.fromJson(userData);
  }

  async createUser(user: UserModel): Promise<UserModel> {
    const response: AxiosResponse<UserModel> = await axios.post(URL, user);
    return response.data;
  }
}
