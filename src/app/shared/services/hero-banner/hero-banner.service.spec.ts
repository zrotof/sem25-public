import { TestBed } from '@angular/core/testing';

import { HeroBannerService } from './hero-banner.service';

describe('HeroBannerService', () => {
  let service: HeroBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
