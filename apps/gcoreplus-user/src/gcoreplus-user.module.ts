import { Environment, EnvironmentModule } from '@app/environment';
import { LoggerModule } from 'nestjs-pino';
import { Params } from 'nestjs-pino/params';
import { Module } from '@nestjs/common';

import { UserController } from './controllers';
import { UserService } from './services';
import { GCorePlusUserDBModule } from './gcoreplus-user.db.module';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
  ],
  imports: [
    // Commons
    EnvironmentModule,
    LoggerModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [Environment],
      useFactory: ((environment: Environment): Params => ({
        pinoHttp: {
          level: environment.LOG_LEVEL,
          autoLogging: {
            ignore: (req) => ["/health", "/favicon.ico"].includes(req.url),
          },
          serializers: {
            req(req) {
              req.body = req.raw.body;
              return req;
            },
          },
        },
      })),
    }),

    GCorePlusUserDBModule,
  ],
})
export class GCorePlusUserModule {}
