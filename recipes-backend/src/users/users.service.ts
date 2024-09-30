import { Injectable } from '@nestjs/common';

interface User {
  userId: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'john@com.pl',
      password: 'test',
    },
    {
      userId: 2,
      email: 'maria@com.pl',
      password: 'test',
    },
  ];
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
