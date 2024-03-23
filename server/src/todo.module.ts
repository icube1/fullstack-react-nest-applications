import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Task } from './todo.entity';
import dataSource from './data.source'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...dataSource,
      synchronize: true,
      ssl: true,
    } as PostgresConnectionOptions),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})

export class AppModule {}
