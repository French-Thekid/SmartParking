import { TestBed } from '@angular/core/testing';

import { OUsersService } from './o-users.service';

describe('OUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OUsersService = TestBed.get(OUsersService);
    expect(service).toBeTruthy();
  });
});
