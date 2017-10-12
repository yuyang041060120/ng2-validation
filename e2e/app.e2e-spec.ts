import { NgxIfPage } from './app.po';

describe('ngx-if App', () => {
  let page: NgxIfPage;

  beforeEach(() => {
    page = new NgxIfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
