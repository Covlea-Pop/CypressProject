/// <reference types = "Cypress" />

describe('Ultimate QA Site Tests', () => {
    
  
   it('Navigates to the Automation page and verifies key links', () => {
      cy.visit('https://ultimateqa.com/automation');
      cy.url().should('include', '/automation');
      cy.get('#menu-item-218108 > a').should('exist');
      cy.get('a[href*="fake-landing-page"]').should('exist');
    });
  
    it('Submits a form successfully on the Fake Landing Page', () => {
      cy.visit('https://ultimateqa.com/automation');
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
    it("Create new account",() => {

        cy.visit("https://courses.ultimateqa.com/users/sign_up") 
        cy.get('#user\\[first_name\\]').type('Tom');
        cy.get('#user\\[last_name\\]').type('Jones');
        cy.get('#user\\[email\\]').type("tomjones@fly.com")
        cy.get('#user\\[password\\]').type("password123")
        cy.get("#user\\[terms\\]").check()
        cy.get('.form__button-group .button').click(); 


    })
    it("Get Early Access to Academy",() => {

      cy.visit("https://ultimateqa.com/automation")
      cy.get('#menu-main-menu > #menu-item-217931 > a').click()
      cy.get('.formkit-signup').click()
      cy.get(':nth-child(1) > .formkit-input').type("Tom")
      cy.get(':nth-child(2) > .formkit-input').type("Joe")
      cy.get(':nth-child(3) > .formkit-input').type("tomjon@mailinator.com")
      cy.get(':nth-child(4) > .formkit-input').type("0045777845")
      cy.get('.formkit-submit > span').click()

    })
  });
  
  