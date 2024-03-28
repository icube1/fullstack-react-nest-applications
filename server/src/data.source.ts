import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dataSource: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL || "postgres://admin:root@localhost:5432/todo_list?scheme=public",
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default dataSource;