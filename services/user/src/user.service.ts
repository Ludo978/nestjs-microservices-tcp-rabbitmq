import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { USER_QUEUE } from './constants';
import {
  MAIN_EXCHANGE,
  OFFER_CREATED_EVENT,
} from 'libs/rabbitmq/rabbitmq.constants';

@Injectable()
export class UserService {
  getAll(): string {
    return 'John Doe';
  }

  @RabbitSubscribe({
    exchange: MAIN_EXCHANGE,
    routingKey: OFFER_CREATED_EVENT,
    queue: USER_QUEUE,
  })
  handleOfferCreated(offer: any) {
    console.log('Received offer created event in user service:', offer);
  }
}
