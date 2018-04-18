import { TestBed, inject } from '@angular/core/testing';

import { SpecialitesService } from './specialites.service';

describe('SpecialitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialitesService]
    });
  });

  it('should be created', inject([SpecialitesService], (service: SpecialitesService) => {
    expect(service).toBeTruthy();
  }));
});
