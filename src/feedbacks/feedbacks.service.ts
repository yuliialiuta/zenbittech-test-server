import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Feedbacks } from './entities/feedbacks.entity'

@Injectable()
export class FeedbacksService {
    constructor(
        @InjectRepository(Feedbacks)
        private feedbackRepository: Repository<Feedbacks>
    ){}

    findAll(): Promise<Feedbacks[]> {
        return this.feedbackRepository.find();
    }

    createFeedback(feedback: Feedbacks): Promise<Feedbacks> {
        return this.feedbackRepository.save(feedback);
    }
}
