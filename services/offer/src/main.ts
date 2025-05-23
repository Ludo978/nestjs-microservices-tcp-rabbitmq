import { NestFactory } from '@nestjs/core';
import { OfferModule } from './offer.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(OfferModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3000,
    },
  });
  await app.listen();
}
bootstrap();
