import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import datasource from './gcoreplus-user.db.datasource';

import { CONNECTION } from './gcoreplus-user.contants';
import { User } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...datasource.options,
      autoLoadEntities: true
    }),

    TypeOrmModule.forFeature([User], CONNECTION),
  ],
  exports: [
    TypeOrmModule
  ]
})
export class GCorePlusUserDBModule {}