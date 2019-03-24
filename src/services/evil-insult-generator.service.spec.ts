import { TestBed, inject } from '@angular/core/testing';

import { EvilInsultGeneratorService } from './evil-insult-generator.service';

describe('EvilInsultGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvilInsultGeneratorService]
    });
  });

  it('should be created', inject([EvilInsultGeneratorService], (service: EvilInsultGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
