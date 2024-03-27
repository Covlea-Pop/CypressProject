/// <reference types = "Cypress" />

describe('Saucedemo Site Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Successfully logs in with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Adds an item to the cart', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_list').find('.cart_item').should('have.length', 1);
  });

  it('Completes a checkout process', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  it('Logs out from the application', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('Custom Command: Use custom login command', () => {
    it('Logs in using the custom command', () => {
      cy.login('standard_user', 'secret_sauce'); // Use the custom 'login' command
      cy.url().should('include', '/inventory.html');
    });
  });
  

  
});
