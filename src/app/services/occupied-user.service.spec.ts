import { TestBed } from '@angular/core/testing';

import { OccupiedUserService } from './occupied-user.service';

describe('OccupiedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupiedUserService = TestBed.get(OccupiedUserService);
    expect(service).toBeTruthy();
  });
});
