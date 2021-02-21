import { Expose, plainToClass } from 'class-transformer';

export default class UserModel {
  @Expose() id: number;
  @Expose() name: string;
  @Expose() email: string;

  constructor(id?: number, name?: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static fromJson(json: UserModel) {
    return plainToClass(UserModel, json, {
      excludeExtraneousValues: true,
    });
  }
}
