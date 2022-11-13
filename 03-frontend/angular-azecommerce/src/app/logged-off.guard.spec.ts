import { TestBed } from '@angular/core/testing';

import { LoggedOffGuard } from './logged-off.guard';

describe('LoggedOffGuard', () => {
  let guard: LoggedOffGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedOffGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
