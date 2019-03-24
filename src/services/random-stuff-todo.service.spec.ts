import { TestBed, inject } from '@angular/core/testing';

import { RandomStuffTodoService } from './random-stuff-todo.service';

describe('RandomStuffTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomStuffTodoService]
    });
  });

  it('should be created', inject([RandomStuffTodoService], (service: RandomStuffTodoService) => {
    expect(service).toBeTruthy();
  }));
});
