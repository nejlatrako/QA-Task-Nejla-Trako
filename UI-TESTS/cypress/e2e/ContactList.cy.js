describe('[SMOKE] → Contact List Page', () => {

    beforeEach(() => {

        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        cy.get('#email').type('nejla.test@gmail.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();
        cy.url().should('include', '/contactList'); 
    }) 

// Verify the Contact list page is loaded
    it('Contact list should be displayed', () => {
        cy.url().should('include', '/contactList'); 
    });

//Verify that the user is abele to add new contact
    it('A new contact should be added', () => {
        cy.get('#add-contact').click();
        cy.get('#firstName').type('New');
        cy.get('#lastName').type('contact');
        cy.get('#birthdate').type('2001-08-08');
        cy.get('#email').type('new.contact@gmail.com');
        cy.get('#phone').type('123456789');
        cy.get('#street1').type('Street 1');
        cy.get('#street2').type('Street 2');
        cy.get('#city').type('Zenica');
        cy.get('#stateProvince').type('/');
        cy.get('#postalCode').type('72000');
        cy.get('#country').type('BiH');
        cy.get('#submit').click('');
        cy.url().should('include', '/contactList'); 


    });

//Verify user can edit the contact

    it('Contact should be edited', () => {

        cy.get(':nth-child(3) > :nth-child(2)').click();
        cy.get('#edit-contact').click();
        cy.get('#firstName').clear();
        cy.get('#firstName').type('This is');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('Edited contact');
        cy.get('#submit').click('');
        cy.url().should('include', '/contactDetails'); 
        cy.get('#return').click();
        cy.url().should('include', '/contactList'); 
    });
    
//Verify user can delete the contact
    it('Contact should be deleted', () => {

        cy.get(':nth-child(3) > :nth-child(2)').click();
        cy.get('#delete').click();

    });
  });