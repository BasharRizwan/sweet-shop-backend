import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sweet } from './sweet.entity';
import { SweetsService } from './sweets.service';
import { SweetsController } from './sweets.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sweet]),
    AuthModule,
  ],
  controllers: [SweetsController],
  providers: [SweetsService],
})
export class SweetsModule {}
