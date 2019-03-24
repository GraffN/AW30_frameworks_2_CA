import { TestBed, inject } from '@angular/core/testing';

import { RandomAdviceService } from './random-advice.service';

describe('RandomAdviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomAdviceService]
    });
  });

  it('should be created', inject([RandomAdviceService], (service: RandomAdviceService) => {
    expect(service).toBeTruthy();
  }));
});
