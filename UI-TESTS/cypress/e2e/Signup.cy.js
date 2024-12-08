describe('[Smoke] → Sign-Up Page', () => {

    beforeEach(() => {

        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('#signup').click();
    }) 


// Verify the sign up page is loaded
    it('Sign up page should be visible', () => {
        cy.url().should('include', '/addUser'); 
    });

//Verifying that the sign up feature is working correctly by using valid data. 
    it('Sign up with valid data', () => {
        cy.get('#firstName').type('Nejla');
        cy.get('#lastName').type('Trako');
        cy.get('#email').type('trako.nejla.test1@gmail.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();
        cy.url().should('include', '/contactList'); 
    });


//Verifying that the user is not able to sign up by using invalid data [wrong format email].
    it('Sign up with invalid data [wrong email format]', () => {
        cy.get('#firstName').type('Nejla');
        cy.get('#lastName').type('Trako');
        cy.get('#email').type('nejla.test.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();
      cy.get('#error').should('be.visible'); 
    });


//Verifying that the user is not able to sign up by using invalid data [password too short].
    it('Sign up with invalid data [password too short]', () => {
        cy.get('#firstName').type('Nejla');
        cy.get('#lastName').type('Trako');
        cy.get('#email').type('nejla.test@gmail.com');
        cy.get('#password').type('123');
        cy.get('#submit').click();
    cy.get('#error').should('be.visible'); 
    });

//Verifying that the user is not able to sign up by using invalid data [already used email].
    it('Sign up with invalid data [email already used]', () => {
        cy.get('#firstName').type('Nejla');
        cy.get('#lastName').type('Trako');
        cy.get('#email').type('nejla.test@gmail.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();
    cy.get('#error').should('be.visible'); 
    });


//Verifying that the user is not able to sign up by using invalid data [not filling required field - first name].
    it('Sign up with invalid data [no first name which is required]', () => {
        cy.get('#lastName').type('Trako');
        cy.get('#email').type('nejla.test@gmail.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();
    cy.get('#error').should('be.visible'); 
    });


//Verifying that the user is not able to sign up by using invalid data [not filling required field - last name].
it('Sign up with invalid data [no last name which is required]', () => {
    cy.get('#firstName').type('Nejla');
    cy.get('#email').type('nejla.test@gmail.com');
    cy.get('#password').type('password123');
    cy.get('#submit').click();
cy.get('#error').should('be.visible'); 
});

//Verify that the user can logout .
it('The login page should be displayed', () => {
    cy.get('#firstName').type('Nejla');
    cy.get('#lastName').type('Trako');
    cy.get('#email').type('trako.nejla.test17@gmail.com');
    cy.get('#password').type('password123');
    cy.get('#submit').click();
    cy.get('#logout').click(); 
    cy.url().should('include', '/'); 
  });

});