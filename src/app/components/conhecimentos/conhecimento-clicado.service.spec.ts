import { TestBed } from '@angular/core/testing';

import { ConhecimentoClicadoService } from './conhecimento-clicado.service';

describe('ConhecimentoClicadoService', () => {
  let service: ConhecimentoClicadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConhecimentoClicadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
