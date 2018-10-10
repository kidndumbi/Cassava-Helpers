import { TestBed } from '@angular/core/testing';

import { CasModalService } from './cas-modal.service';

describe('CasModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasModalService = TestBed.get(CasModalService);
    expect(service).toBeTruthy();
  });
});
