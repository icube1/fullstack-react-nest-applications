import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { ApplicationModule } from './application.module';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors();
  await app.listen(4000);
}

bootstrap();