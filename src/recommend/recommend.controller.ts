import { Body, Controller, Post } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { RecommendDto } from './recommend.dto';

@Controller('recommend')
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) {}

  @Post()
  recommend(@Body() body: RecommendDto) {
    const { skinType, concerns } = body;
    return this.recommendService.recommend(skinType, concerns);
  }
}
