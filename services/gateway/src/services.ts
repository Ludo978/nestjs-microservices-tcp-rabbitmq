import { Transport } from '@nestjs/microservices';

type Service = {
  name: string;
  transport: Transport.TCP;
  options: {
    host: string;
    port: number;
  };
};
export const USER_SERVICE: Service = {
  name: 'USER_SERVICE',
  transport: Transport.TCP,
  options: { host: 'user', port: 3000 },
};

export const OFFER_SERVICE: Service = {
  name: 'OFFER_SERVICE',
  transport: Transport.TCP,
  options: { host: 'offer', port: 3000 },
};

export const SERVICES = [USER_SERVICE, OFFER_SERVICE];
