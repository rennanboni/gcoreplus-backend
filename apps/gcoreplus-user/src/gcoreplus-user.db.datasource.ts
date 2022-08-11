import { DataSource } from 'typeorm';

import { CONNECTION, SCHEMA } from './gcoreplus-user.contants';
import { join } from 'path';

export default new DataSource({
  type: 'postgres',
  name: CONNECTION,
  schema: SCHEMA,
  url: process.env.DATABASE_URL,
  logging: /true/i.test(process.env.DATABASE_LOGGING),
  migrationsRun: /true/i.test(process.env.DATABASE_MIGRATIONS_RUN),
  migrations: [
    join(__dirname, 'migrations/*.{ts,js}'),
  ],
})
