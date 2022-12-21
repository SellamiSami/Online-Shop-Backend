import { Injectable } from '@nestjs/common';
import { CreateSousCategoryDto } from './dto/create-sous-category.dto';
import { UpdateSousCategoryDto } from './dto/update-sous-category.dto';

@Injectable()
export class SousCategoryService {
  create(createSousCategoryDto: CreateSousCategoryDto) {
    return 'This action adds a new sousCategory';
  }

  findAll() {
    return `This action returns all sousCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sousCategory`;
  }

  update(id: number, updateSousCategoryDto: UpdateSousCategoryDto) {
    return `This action updates a #${id} sousCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sousCategory`;
  }
}
