import { CasNotifyModule } from './cas-notify.module';

describe('CasNotifyModule', () => {
  let casNotifyModule: CasNotifyModule;

  beforeEach(() => {
    casNotifyModule = new CasNotifyModule();
  });

  it('should create an instance', () => {
    expect(casNotifyModule).toBeTruthy();
  });
});
