import * as express from 'express';
import { bootstrap } from '@app/common/bootstrap';

import { GCorePlusUserModule } from './gcoreplus-user.module';

const server = express();
bootstrap(GCorePlusUserModule, server)
  .then(app => app.init())
  .catch(err => console.error('Nest broken', err));

export const api = server;
