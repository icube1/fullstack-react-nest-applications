import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './application.service';
import { Application } from './application.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import dataSource from './data.source';
import { ConfigModule } from '@nestjs/config';
import { ApplicationController } from './Application.controller';

@Module({
    imports: [
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
      providers: [ApplicationService],
})
export class ApplicationModule {}