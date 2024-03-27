/// <reference types = "Cypress" />

describe('Ultimate QA Site Tests', () => {
    beforeEach(() => {
      // Visit the base URL before each test to ensure tests are independent
      cy.visit('https://ultimateqa.com/automation');
    });
  
    it('Navigates to the Automation page and verifies key links', () => {
      cy.url().should('include', '/automation');
      cy.get('#menu-item-218108 > a').should('exist');
      cy.get('a[href*="fake-landing-page"]').should('exist');
      // Add more links as needed
    });
  
    it('Submits a form successfully on the Fake Landing Page', () => {
      cy.get('.et_pb_text_inner > ul > :nth-child(2) > a').click();
      cy.url().should('include', '/fake-landing-page');
      cy.get('#menu-main-menu > #menu-item-217945 > a').click()
      cy.origin('https://forms.clickup.com', () => {
      cy.get('#control-0').type('John Doe');
      cy.get('#control-1').type('john.doe@example.com');
      cy.get('#control-2').type('QA');
      cy.get('#control-3').type('PWC');
      cy.get('[data-test="select__dropdown__toggle"]').click()
      cy.get(':nth-child(2) > .cu-select-option > .cu-custom-fields__dropdown-item > .cu-custom-fields__dropdown-text').click()
      cy.get('#control-5').type("Thank you");
      cy.pause()
      cy.get('[data-test="form__submit-btn"]').click()
      cy.get('h2.ql-align-center').should("contain","Thank You!")


     })
    });
  
    
  });
  
  