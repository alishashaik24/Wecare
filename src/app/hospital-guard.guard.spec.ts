import { TestBed } from '@angular/core/testing';

import { HospitalGuardGuard } from './hospital-guard.guard';

describe('HospitalGuardGuard', () => {
  let guard: HospitalGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HospitalGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
