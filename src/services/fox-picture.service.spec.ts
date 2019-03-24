import { TestBed, inject } from '@angular/core/testing';

import { FoxPictureService } from './fox-picture.service';

describe('FoxPictureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoxPictureService]
    });
  });

  it('should be created', inject([FoxPictureService], (service: FoxPictureService) => {
    expect(service).toBeTruthy();
  }));
});
