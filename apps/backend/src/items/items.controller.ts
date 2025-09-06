import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';

interface Item {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item | undefined {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(
    @Body()
    item: Item,
  ) {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updatedItem: Item,
  ) {
    this.itemsService.update(id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}
