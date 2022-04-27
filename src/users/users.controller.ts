import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  @Get('say-hello')
  get(): any {
    return this.usersService.sayHello();
  }

  @Post('sign-up')
  signUp(): any {
    return this.usersService.signUp();
  }
}
