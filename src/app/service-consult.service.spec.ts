import { TestBed, inject } from '@angular/core/testing';

import { ServiceConsultService } from './service-consult.service';

describe('ServiceConsultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceConsultService]
    });
  });

  it('should be created', inject([ServiceConsultService], (service: ServiceConsultService) => {
    expect(service).toBeTruthy();
  }));
});
