import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RabbitMQSharedModule } from 'libs/rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitMQSharedModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
