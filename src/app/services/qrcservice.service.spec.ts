import { TestBed } from '@angular/core/testing';

import { QrcserviceService } from './qrcservice.service';

describe('QrcserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrcserviceService = TestBed.get(QrcserviceService);
    expect(service).toBeTruthy();
  });
});
