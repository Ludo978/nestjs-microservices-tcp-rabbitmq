import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TCP } from 'libs/tcp/tcp.constants';
import { USER_SERVICE } from 'src/services';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE.name) private readonly client: ClientProxy,
  ) {}

  @Get()
  getAll() {
    return this.client.send({ cmd: TCP.GET_ALL }, {});
  }
}
