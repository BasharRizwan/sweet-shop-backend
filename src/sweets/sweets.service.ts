import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sweet } from './sweet.entity';

@Injectable()
export class SweetsService {
  constructor(
    @InjectRepository(Sweet)
    private sweetRepository: Repository<Sweet>,
  ) {}

  create(sweet: Partial<Sweet>) {
    return this.sweetRepository.save(sweet);
  }

  findAll() {
    return this.sweetRepository.find();
  }

  async purchase(id: number, quantity: number) {
    const sweet = await this.sweetRepository.findOne({ where: { id } });

    if (!sweet) {
      throw new BadRequestException('Sweet not found');
    }

    if (sweet.quantity < quantity) {
      throw new BadRequestException('Not enough stock');
    }

    sweet.quantity -= quantity;
    return this.sweetRepository.save(sweet);
  }

  async restock(id: number, quantity: number) {
    const sweet = await this.sweetRepository.findOne({ where: { id } });

    if (!sweet) {
      throw new BadRequestException('Sweet not found');
    }

    sweet.quantity += quantity;
    return this.sweetRepository.save(sweet);
  }
}
