import { TestBed } from '@angular/core/testing';

import { SeleccionServiceService } from './seleccion-service.service';

describe('SeleccionServiceService', () => {
  let service: SeleccionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
