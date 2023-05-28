describe('User Registration and Login', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/?_k=reuvps');
  });

  it('should allow user registration', () => {
    const username = 'testuser';
    const email = 'testuser@example.com';
    const password = 'testpassword';

    cy.contains('Sign up').click();
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign up').click();

    cy.contains('Your Settings').should('be.visible');
    cy.contains('a.nav-link', 'testuser').should('be.visible');
  });

  
  it('should allow user login', () => {
    const email = 'testuser@example.com';
    const password = 'testpassword';

    cy.contains('Sign in').click();
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.contains('button', 'Sign in').click();

    cy.contains('Your Settings').should('be.visible');
    cy.contains('a.nav-link', 'testuser').should('be.visible');
  });
});