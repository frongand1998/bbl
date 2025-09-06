import { Injectable } from '@nestjs/common';

interface Item {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      id: '1',
      name: 'Item 1',
      description: 'Description for Item 1',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Item 2',
      description: 'Description for Item 2',
      createdAt: new Date(),
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
  create(item: Item) {
    const newOne: Item = {
      ...item,
      id: (Date.now() + Math.random()).toString(),
      createdAt: new Date(),
    };
    this.items.push(newOne);
    return { status: 'success', data: newOne };
  }
  update(id: string, updatedItem: Item): void {
    const item = this.findOne(id);
    if (item) {
      Object.assign(item, updatedItem);
      return { status: 'success', data: item };
    }
    return { status: 'error', message: 'Item not found' };
  }
  delete(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
