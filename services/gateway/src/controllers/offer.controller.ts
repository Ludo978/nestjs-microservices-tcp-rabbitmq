import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('offers')
export class OfferController {
  constructor(@Inject('OFFER_SERVICE') private readonly client: ClientProxy) {}

  @Post()
  createOffer(@Body() data: any) {
    return this.client.send({ cmd: 'create' }, data);
  }

  @Get(':id')
  getOffer(@Param('id') id: string) {
    return this.client.send<any, { id: string }>({ cmd: 'getOffer' }, { id });
  }

  @Get()
  getOffers() {
    return this.client.send({ cmd: 'getAll' }, {});
  }
}
