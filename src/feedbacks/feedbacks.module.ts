import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FeedbacksController } from './feedbacks.controller';

import { Feedbacks } from './entities/feedbacks.entity';
import { FeedbacksService } from './feedbacks.service';

@Module({
  imports:[TypeOrmModule.forFeature([Feedbacks])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService]
})
export class FeedbacksModule {}
