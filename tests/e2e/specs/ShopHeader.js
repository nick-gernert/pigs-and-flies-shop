// https://docs.cypress.io/api/introduction/api.html

describe('Shop Header Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('span', 'Pigs & Flies');
  });
});
