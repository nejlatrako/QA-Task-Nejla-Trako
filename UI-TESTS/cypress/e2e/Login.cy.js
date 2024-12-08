describe('[SMOKE] → Login Page ', () => {

  beforeEach(() => {

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
})


// Verify the login page is loaded
  it('The login page should be displayed', () => {
    cy.get('.main-content > :nth-child(1)').should('contain', 'Log In'); 
  });

//Verifying that the login feature is working correctly by using valid user credentials. 
  it('Login with valid credentials', () => {
    cy.get('#email').type('nejla.test@gmail.com');
    cy.get('#password').type('password123');
    cy.get('#submit').click();
    cy.url().should('include', '/contactList'); 
  });


//Verifying that the user is not able to log in by using invalid credentials.
  it('Login with invalid credentials', () => {
    cy.get('#email').type('nejla.test@gmail.com');
    cy.get('#password').type('password');
    cy.get('#submit').click();
    cy.get('#error').should('be.visible');
  });


//Verify that the user can logout .
  it('The login page should be displayed', () => {
    cy.get('#email').type('nejla.test@gmail.com');
    cy.get('#password').type('password123');
    cy.get('#submit').click();
    cy.get('#logout').click(); 
    cy.url().should('include', '/'); 
  });

});