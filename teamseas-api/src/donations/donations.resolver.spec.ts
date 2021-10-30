import { Test, TestingModule } from '@nestjs/testing';
import { DonationsResolver } from './donations.resolver';
import { DonationsService } from './donations.service';

describe('DonationsResolver', () => {
  let resolver: DonationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonationsResolver, DonationsService],
    }).compile();

    resolver = module.get<DonationsResolver>(DonationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
