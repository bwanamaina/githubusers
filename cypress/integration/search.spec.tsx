/// <reference types="Cypress" />

describe('<Search/> component', () => {
  const user = 'bwanamaina';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should autoFocus on mount', () => {
    cy.focused()
      .should('be.visible')
      .and('have.class', '')
      .and('have.attr', 'placeholder', 'Search github user by username')
      .and('have.attr', 'type', 'text');
  });

  it('Should accept inputs', () => {
    cy.get('input[type="text"]').type(user).should('have.value', user);
  });

  it('Should filter users', () => {
    cy.get('input[type="text"]').type(user);
    cy.get('button').click();
    cy.get('div.card').should('have.length', 1);
  });
});
