import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as admin from './schema/admin';
import * as auditHistory from './schema/audit-history';
import * as employee from './schema/employee';
import * as item from './schema/item';
import * as manager from './schema/manager';
import * as user from './schema/user';

const pool = new Pool({
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DATABASE!,
  ssl: true
});

// { schema } is used for relational queries
export const db = drizzle(pool, {
  schema: {
    ...admin,
    ...auditHistory,
    ...employee,
    ...item,
    ...manager,
    ...user,
  }
});
