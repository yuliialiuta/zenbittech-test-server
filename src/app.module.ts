import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Feedbacks } from './feedbacks/entities/feedbacks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: 'db_feedbacks',
      entities: [ Feedbacks ],
      synchronize: true,
      dropSchema: false
    }), FeedbacksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
