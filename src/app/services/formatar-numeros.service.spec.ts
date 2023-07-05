import { TestBed } from '@angular/core/testing';

import { FormatarNumerosService } from './formatar-numeros.service';

describe('FormatarNumerosService', () => {
  let service: FormatarNumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatarNumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
