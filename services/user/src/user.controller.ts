import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { TCP } from 'libs/tcp/tcp.constants';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: TCP.GET_ALL })
  getAll() {
    return this.userService.getAll();
  }
}
