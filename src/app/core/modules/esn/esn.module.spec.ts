import { EsnModule } from './esn.module';

describe('EsnModule', () => {
  let esnModule: EsnModule;

  beforeEach(() => {
    esnModule = new EsnModule();
  });

  it('should create an instance', () => {
    expect(esnModule).toBeTruthy();
  });
});
