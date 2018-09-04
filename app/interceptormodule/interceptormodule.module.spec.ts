import { InterceptormoduleModule } from './interceptormodule.module';

describe('InterceptormoduleModule', () => {
  let interceptormoduleModule: InterceptormoduleModule;

  beforeEach(() => {
    interceptormoduleModule = new InterceptormoduleModule();
  });

  it('should create an instance', () => {
    expect(interceptormoduleModule).toBeTruthy();
  });
});
