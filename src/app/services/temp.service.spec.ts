import { TestBed } from '@angular/core/testing';

import { TempService } from './temp.service';

describe('TempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempService = TestBed.get(TempService);
    expect(service).toBeTruthy();
  });
});
