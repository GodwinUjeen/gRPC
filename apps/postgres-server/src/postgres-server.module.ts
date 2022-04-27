import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfiguration } from 'libs/config/db-configuration.service';
import { Users } from './entities/user.entity';
import { PostgresServerController } from './postgres-server.controller';
import { PostgresServerService } from './postgres-server.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'godwin',
      password: 'test',
      database: 'testdb',
      entities: [__dirname + 'src/**/entities/*.entity{.ts,.js}'],
      synchronize: true,
      migrationsTableName: 'migration',
      migrationsRun: true,
      migrations: ['src/migration/*{.ts,.js}'],
      subscribers: ['src/subscriber/*{.js,.ts}'],
      ssl: false,
      logging: true,
      logger: 'file',
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [PostgresServerController],
  providers: [PostgresServerService],
})
export class PostgresServerModule {}
