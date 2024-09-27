/// <reference types="cypress" />

describe('LoginForm Component', () => {
  beforeEach(() => {
    // Assuming the LoginForm is served at the /login
    cy.visit('/login');
  });

  it('loads the login form', () => {
    cy.get('form').should('exist');
  });

  it('displays validation errors for empty fields', () => {
    cy.get('input[name=email]').focus().blur();
    cy.get('input[name=password]').focus().blur();
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('displays validation error for invalid email', () => {
    cy.get('input[name=email]').type('invalid-email');
    cy.get('input[name=password]').focus();
    cy.contains('Enter a valid email').should('be.visible');
  });

  it('displays validation error for short password', () => {
    cy.get('input[name=password]').type('123');
    cy.get('input[name=email]').focus();
    cy.contains('Password should be of minimum 6 characters length').should('be.visible');
  });

  it('handles incorrect login credentials', () => {
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();
    // Assuming the toast message is used to display login errors
    cy.contains('Invalid user credentials').should('be.visible'); // Replace with the actual error message expected
  });

  it('submits the form with correct credentials and redirects to home page', () => {
    // Intercept the API call for login
    cy.intercept('POST', `${Cypress.env('NEXT_PUBLIC_BASE_URL')}/token`, (req) => {
      // Parse the request body to check if it matches the expected form data
      const body = new URLSearchParams(req.body);

      // Check if the grant_type is 'password'
      if (body.get('grant_type') === 'password') {
        // Only intercept the request if it has the correct grant_type
        req.alias = 'passwordGrantTypeRequest';
      }
    }).as('loginRequest');

    // Fill in the form and submit
    cy.get('input[name=email]').type('');
    cy.get('input[name=password]').type('test1234.');
    cy.get('button[type=submit]').click();

    // Wait for the API call to complete
    cy.wait('@passwordGrantTypeRequest').then((interception) => {
      // Check if the response of the API call contains the token
      expect(interception.response?.body).to.have.property('access_token');
      expect(interception.response?.body).to.have.property('access_token');
      expect(interception.response?.body).to.have.property('access_token');
    });

    // // Check if the token is set in storage as part of the login process
    // cy.window().its('localStorage').invoke('getItem', 'react_app_access_token').should('exist');

    // // Optionally, you can then check the URL if needed
    // cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('displays the mobile layout with only the form centered', () => {
    cy.viewport('iphone-6');
    cy.get('#auth-layout-form').should('be.visible');
    cy.get('#banner-box').should('not.exist');
  });

  it('displays the tablet layout with banner on top and form below', () => {
    cy.viewport('ipad-2');
    cy.get('#banner-box').should('be.visible').and('have.css', 'height', '165px');
    cy.get('#auth-layout-form').should('be.visible');
  });

  it('displays the desktop layout with form and banner side-by-side', () => {
    cy.viewport(1920, 1080);
    cy.get('#auth-layout-form').should('be.visible');
    cy.get('#banner-box').should('be.visible');
  });
});

describe('Protected Route Redirection', () => {
  beforeEach(() => {
    // Clear local storage to remove any existing tokens
    localStorage.clear();
  });

  it('redirects to /login if token is not present in local storage', () => {
    // Visit a protected route (e.g., /dashboard)
    cy.visit('/');
    cy.wait(10000);
    // Check if the URL was redirected to /login
    cy.url()
      .should('include', '/login')
      .then(() => cy.get('form').should('exist'));
  });

  it('redirects to / if token is present in local storage when visiting /login', () => {
    cy.visit('/login');
    // Intercept the API call for login
    cy.intercept('POST', `${Cypress.env('NEXT_PUBLIC_BASE_URL')}/token`, (req) => {
      // Parse the request body to check if it matches the expected form data
      const body = new URLSearchParams(req.body);

      // Check if the grant_type is 'password'
      if (body.get('grant_type') === 'password') {
        // Only intercept the request if it has the correct grant_type
        req.alias = 'passwordGrantTypeRequest';
      }
    }).as('loginRequest');

    // Fill in the form and submit
    cy.get('input[name=email]').type('');
    cy.get('input[name=password]').type('test1234.');
    cy.get('button[type=submit]').click();

    // Wait for the API call to complete
    cy.wait('@passwordGrantTypeRequest').then((interception) => {
      // Check if the response of the API call contains the token
      expect(interception.response?.body).to.have.property('access_token');
      cy.visit('/');
    });

    // Check if the token is set in storage as part of the login process
    cy.window().its('localStorage').invoke('getItem', 'react_app_access_token').should('exist');
    cy.wait(3000);
    // Optionally, you can then check the URL if needed
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.visit('/login');
    cy.wait(3000);
    cy.visit('/');
    cy.wait(3000);

    // Check if the URL is redirected to /
    // Cypress will automatically retry the assertion until it passes or times out
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Optionally, you can check for the presence of elements on the home page
    // to confirm that the redirection was successful
    cy.get('#header-box', { timeout: 10000 }).should('exist');
  });
});
