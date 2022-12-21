import { PartialType } from '@nestjs/mapped-types';
import { CreateSousCategoryDto } from './create-sous-category.dto';

export class UpdateSousCategoryDto extends PartialType(CreateSousCategoryDto) {}
