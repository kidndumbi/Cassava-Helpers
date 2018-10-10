import { CasModalDialogModule } from './cas-modal-dialog.module';

describe('CasModalDialogModule', () => {
  let casModalDialogModule: CasModalDialogModule;

  beforeEach(() => {
    casModalDialogModule = new CasModalDialogModule();
  });

  it('should create an instance', () => {
    expect(casModalDialogModule).toBeTruthy();
  });
});
