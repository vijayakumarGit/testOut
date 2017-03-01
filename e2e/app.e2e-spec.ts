import { TestOutPage } from './app.po';

describe('test-out App', function() {
  let page: TestOutPage;

  beforeEach(() => {
    page = new TestOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
