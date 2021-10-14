import { TestBed } from '@angular/core/testing';

import { SocketTwoService } from './socket-two.service';

describe('SocketTwoService', () => {
  let service: SocketTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
