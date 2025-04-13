import { TestBed } from '@angular/core/testing';

import { ClientsServiceTsService } from './clients.service';

describe('ClientsServiceTsService', () => {
  let service: ClientsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
