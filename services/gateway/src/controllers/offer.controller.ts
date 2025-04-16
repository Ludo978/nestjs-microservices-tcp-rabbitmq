import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TCP } from 'libs/tcp/tcp.constants';
import { OFFER_SERVICE } from 'src/services';

@Controller('offers')
export class OfferController {
  constructor(
    @Inject(OFFER_SERVICE.name) private readonly client: ClientProxy,
  ) {}

  @Post()
  create(@Body() data: any) {
    return this.client.send({ cmd: TCP.CREATE }, data);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.client.send<any, { id: string }>({ cmd: TCP.GET_ONE }, { id });
  }

  @Get()
  getAll() {
    return this.client.send({ cmd: TCP.GET_ALL }, {});
  }
}
