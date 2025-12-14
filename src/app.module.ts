import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { SweetsModule } from './sweets/sweets.module';
import { User } from './users/user.entity';
import { Sweet } from './sweets/sweet.entity';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Bashar1234',
      database: 'sweetshop',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    SweetsModule,
    TypeOrmModule.forFeature([User, Sweet]),
  ],
  providers: [JwtAuthGuard],
})
export class AppModule {}
