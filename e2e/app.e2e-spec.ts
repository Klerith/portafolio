import { PortafolioPage } from './app.po';

describe('portafolio App', () => {
  let page: PortafolioPage;

  beforeEach(() => {
    page = new PortafolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
