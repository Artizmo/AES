import { AesModule } from './aes.module';

describe('AesModule', () => {
  let aesModule: AesModule;

  beforeEach(() => {
    aesModule = new AesModule();
  });

  it('should create an instance', () => {
    expect(aesModule).toBeTruthy();
  });
});
