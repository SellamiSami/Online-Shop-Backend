import { Module } from '@nestjs/common';
import { SousCategoryService } from './sous-category.service';
import { SousCategoryController } from './sous-category.controller';

@Module({
  controllers: [SousCategoryController],
  providers: [SousCategoryService]
})
export class SousCategoryModule {}
