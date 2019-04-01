import { TestBed } from '@angular/core/testing';

import { ParkingSpaceService } from './parking-space.service';

describe('ParkingSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingSpaceService = TestBed.get(ParkingSpaceService);
    expect(service).toBeTruthy();
  });
});
//
