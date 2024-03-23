import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dataSource: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || "ep-little-breeze-a2npm9dk-pooler.eu-central-1.aws.neon.tech",
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || "default",
  password: process.env.POSTGRES_PASSWORD || "YBOh7bAPJVD9",
  database: process.env.POSTGRES_DATABASE || "verceldb",
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  ssl: true,
};

export default dataSource;