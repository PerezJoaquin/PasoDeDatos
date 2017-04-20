import { PasoDatosPage } from './app.po';

describe('paso-datos App', () => {
  let page: PasoDatosPage;

  beforeEach(() => {
    page = new PasoDatosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
