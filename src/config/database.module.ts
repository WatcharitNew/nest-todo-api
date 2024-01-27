import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      synchronize: true,
      ...configuration().database,
    }),
  ],
})
export class DatabaseModule {}
