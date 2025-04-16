import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import {
  MAIN_EXCHANGE,
  OFFER_CREATED_EVENT,
} from 'libs/rabbitmq/rabbitmq.constants';

@Injectable()
export class UserService {
  get(data: any): string {
    console.log('Received data:', data);
    return 'Ludovic Robbe';
  }

  @RabbitSubscribe({
    exchange: MAIN_EXCHANGE,
    routingKey: OFFER_CREATED_EVENT,
    queue: 'user_queue',
  })
  handleOfferCreated(offer: any) {
    console.log('Received offer created event in user service:', offer);
  }
}
