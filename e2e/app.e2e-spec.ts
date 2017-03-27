import { ChatappGraphcoolPage } from './app.po';

describe('chatapp-graphcool App', () => {
  let page: ChatappGraphcoolPage;

  beforeEach(() => {
    page = new ChatappGraphcoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
