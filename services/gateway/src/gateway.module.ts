import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './controllers/user.controller';
import { OfferController } from './controllers/offer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'user', port: 3000 },
      },
      {
        name: 'OFFER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'offer', port: 3000 },
      },
    ]),
  ],
  controllers: [OfferController, UserController],
})
export class GatewayModule {}
