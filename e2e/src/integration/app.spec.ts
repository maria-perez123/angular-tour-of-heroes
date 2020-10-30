import { getGreeting } from '../support/app.po';

describe('angular-tour-of-heroes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-tour-of-heroes!');
  });
});