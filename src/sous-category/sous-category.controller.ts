import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SousCategoryService } from './sous-category.service';
import { CreateSousCategoryDto } from './dto/create-sous-category.dto';
import { UpdateSousCategoryDto } from './dto/update-sous-category.dto';

@Controller('sous-category')
export class SousCategoryController {
  constructor(private readonly sousCategoryService: SousCategoryService) {}

  @Post()
  create(@Body() createSousCategoryDto: CreateSousCategoryDto) {
    return this.sousCategoryService.create(createSousCategoryDto);
  }

  @Get()
  findAll() {
    return this.sousCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sousCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSousCategoryDto: UpdateSousCategoryDto) {
    return this.sousCategoryService.update(+id, updateSousCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sousCategoryService.remove(+id);
  }
}
