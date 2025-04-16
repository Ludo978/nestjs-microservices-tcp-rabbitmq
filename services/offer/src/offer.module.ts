import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { RabbitMQSharedModule } from 'libs/rabbitmq/rabbitmq.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './schemas/offer.schema';

@Module({
  imports: [
    RabbitMQSharedModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/db'),
    MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
