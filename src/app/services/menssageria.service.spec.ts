import { TestBed, inject } from '@angular/core/testing';

import { MenssageriaService } from './menssageria.service';

describe('MenssageriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenssageriaService]
    });
  });

  it('should be created', inject([MenssageriaService], (service: MenssageriaService) => {
    expect(service).toBeTruthy();
  }));
});
