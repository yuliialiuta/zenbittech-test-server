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
      host: 'sql11.freemysqlhosting.net',
      port: 3306,
      username: 'sql11469727',
      password: 'qk431LVgEk',
      database: 'sql11469727',
      entities: [ Feedbacks ],
      synchronize: true,
      dropSchema: false
    }), FeedbacksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
