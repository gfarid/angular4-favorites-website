import { FavWebAppPage } from './app.po';

describe('fav-web-app App', () => {
  let page: FavWebAppPage;

  beforeEach(() => {
    page = new FavWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
