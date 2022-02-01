import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Feedbacks } from './entities/feedbacks.entity'
import { FeedbacksService } from './feedbacks.service'

@Controller('feedbacks')
export class FeedbacksController {
    constructor(private readonly feedbacksService: FeedbacksService) {}

    @Post()
    async createFeedback(@Res() response, @Body()feedback: Feedbacks) {
        const newFeedback = await this.feedbacksService.createFeedback(feedback);
        return response.status(HttpStatus.CREATED).json({ newFeedback });
    }

    @Get()
    async fetchAll(@Res() response){
        const feedbacks = await this.feedbacksService.findAll();
        return response.status(HttpStatus.OK).json({ feedbacks })
    }
}
