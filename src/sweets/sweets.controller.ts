import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { SweetsService } from './sweets.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('sweets')
@UseGuards(JwtAuthGuard)
export class SweetsController {
  constructor(private sweetsService: SweetsService) {}

  @Post()
  create(@Body() body: any) {
    return this.sweetsService.create(body);
  }

  @Get()
  findAll() {
    return this.sweetsService.findAll();
  }

  @Post(':id/purchase')
  purchase(
    @Param('id') id: string,
    @Body() body: { quantity: number },
  ) {
    return this.sweetsService.purchase(Number(id), body.quantity);
  }

  @Post(':id/restock')
  restock(
    @Param('id') id: string,
    @Body() body: { quantity: number },
  ) {
    return this.sweetsService.restock(Number(id), body.quantity);
  }
}
