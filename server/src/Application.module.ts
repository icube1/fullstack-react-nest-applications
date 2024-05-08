import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './application.service';
import { Application } from './application.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import dataSource from './data.source';
import { ConfigModule } from '@nestjs/config';
import { ApplicationController } from './Application.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({
          envFilePath: '.env',
        }),
        TypeOrmModule.forRoot({
          ...dataSource,
          synchronize: true,
        } as PostgresConnectionOptions),
        TypeOrmModule.forFeature([Application]),
      ],
      controllers: [ApplicationController],
      providers: [ApplicationService, AuthService],
})
export class ApplicationModule {}