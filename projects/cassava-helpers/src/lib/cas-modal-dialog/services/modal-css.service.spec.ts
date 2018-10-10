import { TestBed } from '@angular/core/testing';

import { ModalCssService } from './modal-css.service';

describe('ModalCssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalCssService = TestBed.get(ModalCssService);
    expect(service).toBeTruthy();
  });
});
