import { TestBed, inject } from '@angular/core/testing';

import { TemplateSrvService } from './template-srv.service';

describe('TemplateSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateSrvService]
    });
  });

  it('should be created', inject([TemplateSrvService], (service: TemplateSrvService) => {
    expect(service).toBeTruthy();
  }));
});
