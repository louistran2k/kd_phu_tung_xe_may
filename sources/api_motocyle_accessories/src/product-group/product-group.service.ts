import { Injectable } from '@nestjs/common';
import { CreateProductGroupDto } from './dto/create-product-group.dto';
import { UpdateProductGroupDto } from './dto/update-product-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductGroupEntity } from './entities/product-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductGroupService {
  constructor(
    @InjectRepository(ProductGroupEntity) private readonly productGroupRepository: Repository<ProductGroupEntity>
  ) {}

  create(createProductGroupDto: CreateProductGroupDto) {
    return 'This action adds a new productGroup';
  }

  findAll() {
    return `This action returns all productGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productGroup`;
  }

  update(id: number, updateProductGroupDto: UpdateProductGroupDto) {
    return `This action updates a #${id} productGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} productGroup`;
  }
}
