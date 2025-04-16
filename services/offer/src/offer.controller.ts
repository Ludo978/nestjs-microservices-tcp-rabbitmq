import { Body, Controller } from '@nestjs/common';
import { OfferService } from './offer.service';
import { MessagePattern } from '@nestjs/microservices';
import { Offer } from './schemas/offer.schema';

@Controller()
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @MessagePattern({ cmd: 'create' })
  createOffer(@Body() offer: Offer) {
    return this.offerService.create(offer);
  }

  @MessagePattern({ cmd: 'getAll' })
  getAll() {
    return this.offerService.getAll();
  }

  @MessagePattern({ cmd: 'getOffer' })
  getOffer(@Body() data: { id: string }) {
    return this.offerService.getOne(data.id);
  }
}
