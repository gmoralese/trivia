import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Configuration } from './schemas/levels.schema';
import { Model } from 'mongoose';
import { IConfiguration } from './models/config.model';

@Injectable()
export class LevelsService {
  constructor(
    @InjectModel(Configuration.name) private configModel: Model<Configuration>,
  ) {}

  public async getLevelsConfig(): Promise<IConfiguration> {
    try {
      const levelConfig = await this.configModel.findOne().exec();
      return levelConfig.toObject();
    } catch (e) {
      throw new Error(e);
    }
  }
}
