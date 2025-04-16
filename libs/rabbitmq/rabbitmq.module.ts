import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { MAIN_EXCHANGE } from './rabbitmq.constants';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: MAIN_EXCHANGE,
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbitmq:rabbitmq@rabbitmq:5672',
      connectionInitOptions: { wait: true, timeout: 10000 },
    }),
  ],
  exports: [RabbitMQModule],
})
export class RabbitMQSharedModule {}
