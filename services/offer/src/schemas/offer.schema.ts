import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Offer {
  @Prop({ required: true })
  title: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
