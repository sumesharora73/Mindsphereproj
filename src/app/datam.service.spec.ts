import { TestBed } from '@angular/core/testing';

import { DatamService } from './datam.service';

describe('DatamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamService = TestBed.get(DatamService);
    expect(service).toBeTruthy();
  });
});
