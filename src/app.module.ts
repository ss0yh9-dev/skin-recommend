import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecommendModule } from './recommend/recommend.module'; // ✅ 추가

@Module({
  imports: [RecommendModule],        // ✅ 여기서도 추가
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
