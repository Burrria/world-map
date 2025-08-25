import { TestBed } from '@angular/core/testing';

import { WorldData } from './world-data';

describe('WorldData', () => {
  let service: WorldData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
