import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  MAIN_EXCHANGE,
  OFFER_CREATED_EVENT,
} from 'libs/rabbitmq/rabbitmq.constants';
import { Model } from 'mongoose';
import { Offer } from './schemas/offer.schema';
import { OFFER_QUEUE } from './constants';

@Injectable()
export class OfferService {
  constructor(
    private readonly amqpConnection: AmqpConnection,
    @InjectModel('Offer') private readonly offerModel: Model<Offer>,
  ) {}

  async create(data: Offer) {
    console.log('Creating offer:', data);
    const offer = new this.offerModel(data);
    await offer.save();
    await this.amqpConnection.publish(MAIN_EXCHANGE, OFFER_CREATED_EVENT, {
      data,
    });
    return 'Offer created successfully';
  }

  @RabbitSubscribe({
    exchange: MAIN_EXCHANGE,
    routingKey: OFFER_CREATED_EVENT,
    queue: OFFER_QUEUE,
  })
  handleOfferCreated(offer: any) {
    console.log('handleOfferCreated in offer-service', offer);
  }

  getAll() {
    return this.offerModel.find();
  }

  getOne(id: string) {
    return this.offerModel.findById(id);
  }
}
