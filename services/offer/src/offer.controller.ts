import { Body, Controller } from '@nestjs/common';
import { OfferService } from './offer.service';
import { MessagePattern } from '@nestjs/microservices';
import { Offer } from './schemas/offer.schema';
import { TCP } from 'libs/tcp/tcp.constants';

@Controller()
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @MessagePattern({ cmd: TCP.CREATE })
  create(@Body() offer: Offer) {
    return this.offerService.create(offer);
  }

  @MessagePattern({ cmd: TCP.GET_ALL })
  getAll() {
    return this.offerService.getAll();
  }

  @MessagePattern({ cmd: TCP.GET_ONE })
  getOne(@Body() data: { id: string }) {
    return this.offerService.getOne(data.id);
  }
}
