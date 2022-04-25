import { Test, TestingModule } from '@nestjs/testing';
import { PostgresServerController } from './postgres-server.controller';
import { PostgresServerService } from './postgres-server.service';

describe('PostgresServerController', () => {
  let postgresServerController: PostgresServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostgresServerController],
      providers: [PostgresServerService],
    }).compile();

    postgresServerController = app.get<PostgresServerController>(PostgresServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(postgresServerController.getHello()).toBe('Hello World!');
    });
  });
});
