import { GithubPage } from './app.po';

describe('github App', () => {
  let page: GithubPage;

  beforeEach(() => {
    page = new GithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
