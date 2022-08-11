import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { GCorePlusUserModule } from '../../gcoreplus-user/src/gcoreplus-user.module';

@Module({
  imports: [
    // Modules
    GCorePlusUserModule,

    // Routes
    RouterModule.register([
      {
        path: '/user',
        module: GCorePlusUserModule
      },
    ]),
  ],
})
export class AppModule {}
