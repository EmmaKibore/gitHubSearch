import { TestBed } from '@angular/core/testing';

import { ReposRequestService } from './repos-request.service';

describe('ReposRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposRequestService = TestBed.get(ReposRequestService);
    expect(service).toBeTruthy();
  });
});
