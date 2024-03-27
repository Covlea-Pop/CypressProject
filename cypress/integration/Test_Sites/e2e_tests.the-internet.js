/// <reference types = "Cypress" />


describe('The-Internet Herokuapp Site Tests ', () => {
    it('Successfully logs in', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').click();
      cy.get('#flash').should('contain', 'You logged into a secure area!');
      cy.get('.button').click()
    });
    it('Toggles checkboxes', () => {
        cy.visit('https://the-internet.herokuapp.com');
        cy.get(':nth-child(6) > a').click()
        cy.get('input[type="checkbox"]').first().check().should('be.checked');
        cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
      });
    it('Interacts with JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (str) => {
          expect(str).to.equal('I am a JS Alert');
        });
        cy.on('window:confirm', () => true); 
        cy.get('#result').should('contain', 'You successfully clicked an alert');
      });
    it('Selects an option from the dropdown', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.get('#dropdown').select('Option 1').should('have.value', '1');
      });
    it('Waits for dynamically loaded elements', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2');
        cy.contains('Start').click();
        cy.get('#loading').should('be.visible');
        cy.get('#finish').should('contain', 'Hello World!');
      });
    
    it('Accesses the Floating Menu page and verifies menu visibility on scroll', () => {
          cy.visit('https://the-internet.herokuapp.com/');
          cy.get('#content > ul > li:nth-child(19) > a').click();
          cy.get('#menu > ul > li:nth-child(1) > a').should('be.visible');
          cy.get('#menu > ul > li:nth-child(2) > a').should('be.visible');
          cy.get('#menu > ul > li:nth-child(3) > a').should('be.visible');
          cy.get('#menu > ul > li:nth-child(4) > a').should('be.visible');
          cy.scrollTo('bottom');
          cy.go('back');
        });
      });

      
      
      
  
  