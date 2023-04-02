import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'levels' })
export class Configuration extends Document {
  @Prop()
  _id: string;

  @Prop({ type: Object })
  config: {
    easy: {
      difficulty: string;
      amount: number;
    }[];
    medium: {
      difficulty: string;
      amount: number;
    }[];
    hard: {
      difficulty: string;
      amount: number;
    }[];
    inferno: {
      difficulty: string;
      amount: number;
    }[];
  };
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
