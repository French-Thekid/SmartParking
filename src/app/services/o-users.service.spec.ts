import { TestBed } from '@angular/core/testing';

import { OccupiedUserService } from './o-users.service';

describe('OUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupiedUserService = TestBed.get(OccupiedUserService);
    expect(service).toBeTruthy();
  });
});
