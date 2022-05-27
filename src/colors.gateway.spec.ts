import { Test, TestingModule } from '@nestjs/testing';
import { ColorsGateway } from './colors.gateway';

describe('ColorsGateway', () => {
  let gateway: ColorsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorsGateway],
    }).compile();

    gateway = module.get<ColorsGateway>(ColorsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
