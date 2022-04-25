import { Test, TestingModule } from '@nestjs/testing';
import { PostgresClientController } from './postgres-client.controller';
import { PostgresClientService } from './postgres-client.service';

describe('PostgresClientController', () => {
  let controller: PostgresClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostgresClientController],
      providers: [PostgresClientService],
    }).compile();

    controller = module.get<PostgresClientController>(PostgresClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
