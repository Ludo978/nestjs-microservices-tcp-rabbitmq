import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { SERVICES } from './services';
import { CONTROLLERS } from './controllers';

@Module({
  imports: [ClientsModule.register(SERVICES)],
  controllers: CONTROLLERS,
})
export class GatewayModule {}
