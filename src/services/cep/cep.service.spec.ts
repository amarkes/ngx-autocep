import { TestBed, inject } from '@angular/core/testing';

import { CepService } from './cep.service';

describe('CepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepService]
    });
  });

  it('should be created', inject([CepService], (service: CepService) => {
    expect(service).toBeTruthy();
  }));
});
