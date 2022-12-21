import { Test, TestingModule } from '@nestjs/testing';
import { SousCategoryController } from './sous-category.controller';
import { SousCategoryService } from './sous-category.service';

describe('SousCategoryController', () => {
  let controller: SousCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SousCategoryController],
      providers: [SousCategoryService],
    }).compile();

    controller = module.get<SousCategoryController>(SousCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
