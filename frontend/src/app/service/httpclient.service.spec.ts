import { TestBed } from '@angular/core/testing';

import { HttpclientService } from './user.service';

describe('HttpclientService', () => {
  let service: HttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
