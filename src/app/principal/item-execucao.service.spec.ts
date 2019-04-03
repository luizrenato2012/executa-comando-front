import { TestBed, inject } from '@angular/core/testing';

import { ItemExecucaoService } from './item-execucao.service';

describe('ItemExecucaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemExecucaoService]
    });
  });

  it('should be created', inject([ItemExecucaoService], (service: ItemExecucaoService) => {
    expect(service).toBeTruthy();
  }));
});
