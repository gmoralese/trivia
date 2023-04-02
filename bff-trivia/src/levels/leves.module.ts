import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Configuration, ConfigurationSchema } from './schemas/levels.schema';
import { LevelsService } from './levels.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Configuration.name, schema: ConfigurationSchema },
    ]),
  ],
  controllers: [],
  providers: [LevelsService],
  exports: [LevelsService],
})
export class LevelsModule {}
