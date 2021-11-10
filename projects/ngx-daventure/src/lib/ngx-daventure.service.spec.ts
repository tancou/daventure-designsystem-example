import { TestBed } from '@angular/core/testing';

import { NgxDaventureService } from './ngx-daventure.service';

describe('NgxDaventureService', () => {
  let service: NgxDaventureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDaventureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
